import { Fragment, useState, useEffect, useRef } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import Editor from "@monaco-editor/react";
import { marked } from "marked";
import {
  BsGrid1X2Fill,
  BsFillFolderFill,
  BsFillCloudDownloadFill,
} from "react-icons/bs";
import { CgDarkMode } from "react-icons/cg";
import "github-markdown-css/github-markdown-light.css";
import Button from "./components/Button";

export default function App() {
  const [editorText, setEditorText] = useLocalStorage("editorText", "");
  const [markedText, setMarkedText] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.outerWidth);
  const [darkEditorTheme, setDarkEditorTheme] = useLocalStorage(
    "darkEditorTheme",
    true
  );
  const [defaultGrid, setDefaultGrid] = useLocalStorage("defaultGrid", true);

  const refUploadFileInput = useRef(null);

  // Abre el explordador de archivos del sistema
  const openFilebrowser = () => {
    refUploadFileInput.current.click();
  };

  // Obtiene el contenido del archivo seleccionado
  const fileUpload = (e) => {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
      let files = e.target.files;
      let reader = new FileReader();

      reader.onload = function (file) {
        setEditorText(file.target.result);
        return true;
      };

      reader.readAsText(files[0]);
      window.location.reload();
    } else {
      alert("The File APIs are not fully supported in this browser.");
    }
  };

  // Guarda el en la maquina local el contenido del editor en un archivo README.md o el nombre asignado.md
  const downloadMarkdown = () => {
    const fileName = prompt("Enter file name") || "markdown";

    const archivo = new Blob([editorText], {
      type: "text/plain",
    });
    const url = URL.createObjectURL(archivo);
    const a = document.createElement("a");

    a.href = url;
    a.download = fileName.trim() + ".md";
    a.click();
    URL.revokeObjectURL(url);
  };

  window.addEventListener("resize", () => setWindowWidth(window.outerWidth));

  /**
   * Calcula el acho que deve tener los bloques de codigo.
   * Esto se hace par que el bloque de codigo tenga un scroll horizontal
   * cuanod su contendio lo supere.
   */
  useEffect(() => {
    const padding = windowWidth >= 768 ? 90 : 30;
    const allPreElements = Array.from(document.querySelectorAll("pre"));

    allPreElements.forEach((preElement) => {
      preElement.style.maxWidth = `${(windowWidth - padding) / 2}px`;
    });
  }, [markedText, windowWidth]);

  // Actualiza el estado setMarkedText con el contenido del editor cada vez que cambia su contenido
  useEffect(() => setMarkedText(marked.parse(editorText)), [editorText]);

  return (
    <Fragment>
      <input
        style={{ display: "none" }}
        type="file"
        ref={refUploadFileInput}
        onChange={fileUpload}
        accept=".md,.mdown,.txt,.markdown"
      />

      <div className="container">
        <header>
          <Button
            onClick={() => {
              setDefaultGrid(!defaultGrid);
              window.location.reload();
            }}
          >
            <BsGrid1X2Fill />
            Change grid
          </Button>

          <Button onClick={() => setDarkEditorTheme(!darkEditorTheme)}>
            <CgDarkMode />
            Change Editor Theme
          </Button>

          <Button onClick={openFilebrowser}>
            <BsFillFolderFill />
            Open File
          </Button>

          <Button onClick={downloadMarkdown}>
            <BsFillCloudDownloadFill />
            Download
          </Button>
        </header>

        <main className={defaultGrid ? "horizontal-grid" : "vertical-grid"}>
          {/* <div style={{ background: "dodgerblue" }}></div> */}
          {/* <div style={{ background: "yellow" }}></div> */}
          <Editor
            theme={darkEditorTheme ? "vs-dark" : "vs-light"}
            defaultLanguage="markdown"
            defaultValue={editorText}
            onChange={(text) => setEditorText(text)}
          />
          <section
            className="markdown-body"
            dangerouslySetInnerHTML={{ __html: markedText }}
          />
        </main>
      </div>
    </Fragment>
  );
}
