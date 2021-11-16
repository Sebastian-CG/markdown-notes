import { marked } from "marked";
import { useEffect, useRef, useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";

// Components
import Editor from "./components/Editor";
import Output from "./components/Output";
import ShortcutBar from "./components/ShortcutBar";
import styled, { createGlobalStyle } from "styled-components";
import MainButtons from "./components/MainButtons";

const App = () => {
  const [textMarkdown, setTextMarkdown] = useLocalStorage("textMarkdown", "");
  const [markedText, setMarkedText] = useState("");

  const refShortcutBar = useRef(null);
  const refOutput = useRef(null);
  const refUploadFileInput = useRef(null);

  const updateText = newText => {
    setTextMarkdown(newText);
  };

  const addElement = element => {
    const newElement = textMarkdown.length > 0 ? `\n\n${element}` : `${element}`;
    setTextMarkdown(textMarkdown + newElement);
  };

  const toggleItem = element => {
    element.current.classList.toggle("toggleElement");
  };

  const deleteTextMarkdown = () => {
    const confirmation = window.confirm(
      "This action will eliminate everything. be sure to want to do it?"
    );

    if (confirmation) setTextMarkdown("");
  };

  const downloadMarkdown = () => {
    const archivo = new Blob([textMarkdown], {
      type: "text/plain",
    });
    const url = URL.createObjectURL(archivo);
    const a = document.createElement("a");

    a.href = url;
    a.download = "README.md";
    a.click();
    URL.revokeObjectURL(url);
  };

  const openFilebrowser = () => {
    refUploadFileInput.current.click();
  };

  const fileUpload = e => {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
      let files = e.target.files;
      let reader = new FileReader();

      reader.onload = function (file) {
        setTextMarkdown(file.target.result);
        return true;
      };

      reader.readAsText(files[0]);
    } else {
      alert("The File APIs are not fully supported in this browser.");
    }
  };

  useEffect(() => setMarkedText(marked(textMarkdown)), [textMarkdown]);

  return (
    <>
      <GlobalStyle />

      <MainContainer>
        <ShortcutBar refShortcutBar={refShortcutBar} addElement={addElement} />
        <Editor textMarkdown={textMarkdown} updateText={updateText} />
        <Output refOutput={refOutput} markedText={markedText} />
      </MainContainer>

      <MainButtons
        refShortcutBar={refShortcutBar}
        refOutput={refOutput}
        refUploadFileInput={refUploadFileInput}
        toggleItem={toggleItem}
        downloadMarkdown={downloadMarkdown}
        deleteTextMarkdown={deleteTextMarkdown}
        openFilebrowser={openFilebrowser}
        fileUpload={fileUpload}
      />
    </>
  );
};

export default App;

const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border: none;
  outline: none;
}

html {
  font-size: 62.5%;
}

body {
  font-family: 'Quicksand', sans-serif;
  color: #222222;
  background-color: #ffffff;
}

#app {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

button {
  background-color: #ffffff;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12),
    0px 2px 4px -1px rgba(0, 0, 0, 0.2);
  transition: transform 0.1s ease;

  &:active {
    box-shadow: none;
    transform: scale(0.9);
  }
}

.toggleElement {
  transform: translateX(0);
}
`;

const MainContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;

  height: 100vh;
  overflow: auto;

  @media (min-width: 600px) {
    grid-template-columns: 20rem 1fr;
  }

  @media (min-width: 1000px) {
    grid-template-columns: 20rem repeat(2, 1fr);
  }
`;
