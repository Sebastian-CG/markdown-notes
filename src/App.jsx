import { useEffect, useRef, useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import Editor from "@monaco-editor/react";
import { marked } from "marked";
import { FcFolder, FcDownload } from "react-icons/fc";
import "github-markdown-css/github-markdown-dark.css";

export default function App() {
  const [editorText, setEditorText] = useLocalStorage("editorText", "");
  const [markedText, setMarkedText] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.outerWidth);

  const refUploadFileInput = useRef(null);

  const openFilebrowser = () => {
    refUploadFileInput.current.click();
  };

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

  useEffect(() => {
    const padding = windowWidth >= 768 ? 90 : 30;
    const allPreElements = Array.from(document.querySelectorAll("pre"));

    allPreElements.forEach((preElement) => {
      preElement.style.maxWidth = `${(windowWidth - padding) / 2}px`;
    });
  }, [markedText, windowWidth]);

  useEffect(() => {
    setMarkedText(marked.parse(editorText));
  }, [editorText]);

  return (
    <>
      <input
        style={{ display: "none" }}
        type="file"
        ref={refUploadFileInput}
        onChange={fileUpload}
        accept=".md,.mdown,.txt,.markdown"
      />

      <div className="container">
        <Editor
          theme="vs-dark"
          path="index.md"
          defaultLanguage="markdown"
          defaultValue={editorText}
          onChange={(text) => setEditorText(text)}
        />
        <div
          className="markdown-body"
          dangerouslySetInnerHTML={{ __html: markedText }}
        />
      </div>

      <div className="buttons-container">
        <button className="download-btn" onClick={openFilebrowser}>
          <FcFolder />
        </button>
        <button className="download-btn" onClick={downloadMarkdown}>
          <FcDownload />
        </button>
      </div>
    </>
  );
}
