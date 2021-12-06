import { Fragment, useRef } from "react";

// Components
import Button from "./Button";

// Icons
import {
  BsGrid1X2Fill,
  BsFillFolderFill,
  BsFillCloudDownloadFill,
  BsCircleHalf,
} from "react-icons/bs";

export default function Header({
  editorText,
  defaultGrid,
  darkEditorTheme,
  setEditorText,
  setDefaultGrid,
  setDarkEditorTheme,
}) {
  const refUploadFileInput = useRef(null);

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

  // Cambia el estilo del de la gird
  const changeGrid = () => {
    setDefaultGrid(!defaultGrid);
    window.location.reload();
  };

  // Cambia el tema del editor
  const changeTheme = () => {
    setDarkEditorTheme(!darkEditorTheme);
  };

  // Abre el explordador de archivos del sistema
  const openFilebrowser = () => {
    refUploadFileInput.current.click();
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
        <Button onClick={changeGrid}>
          <BsGrid1X2Fill />
          Change grid
        </Button>

        <Button onClick={changeTheme}>
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
