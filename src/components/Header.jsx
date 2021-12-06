import { Fragment, useContext, useRef } from "react";

// Components
import Button from "./Button";

// Icons
import {
  BsGrid1X2Fill,
  BsFillFolderFill,
  BsFillCloudDownloadFill,
  BsCircleHalf,
} from "react-icons/bs";
import { SettingsContext } from "../Context/SettingsProvider";

export default function Header({ editorText, setEditorText }) {
  const refUploadFileInput = useRef(null);
  const { changeEditorTheme, changeLayout } = useContext(SettingsContext);

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

  // Abre el explordador de archivos del sistema
  const openFilebrowser = () => {
    refUploadFileInput.current.click();
  };

  // Guarda el en la maquina local el contenido del editor en un archivo README.md o el nombre asignado.md
  const downloadMarkdown = () => {
    const titleElement = document.getElementsByTagName("h1")[0].innerText;

    const archivo = new Blob([editorText], {
      type: "text/plain",
    });
    const url = URL.createObjectURL(archivo);
    const a = document.createElement("a");

    a.href = url;
    a.download = titleElement.trim() + ".md";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Fragment>
      {/* 
        Este input file no es visible solo se esta tomando
        la funcionalidad del input file
      */}
      <input
        style={{ display: "none" }}
        type="file"
        ref={refUploadFileInput}
        onChange={fileUpload}
        accept=".md,.mdown,.txt,.markdown"
      />

      <header>
        <Button onClick={changeLayout}>
          <BsGrid1X2Fill />
          Change grid
        </Button>

        <Button onClick={changeEditorTheme}>
          <BsCircleHalf />
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
    </Fragment>
  );
}
