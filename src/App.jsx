import { useState, useEffect } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import { marked } from "marked";

// Components
import Header from "./components/Header";
import MonacoEditor from "./components/MonacoEditor";
import Output from "./components/Output";

// Styles
import "github-markdown-css/github-markdown-light.css";

export default function App() {
  const [editorText, setEditorText] = useLocalStorage("editorText", "");
  const [markedText, setMarkedText] = useState("");
  const [darkEditorTheme, setDarkEditorTheme] = useLocalStorage(
    "darkEditorTheme",
    true
  );
  const [defaultGrid, setDefaultGrid] = useLocalStorage("defaultGrid", true);

  // Actualiza el estado setMarkedText con el contenido del editor cada vez que cambia su contenido
  useEffect(() => setMarkedText(marked.parse(editorText)), [editorText]);

  return (
    <div className="container">
      <Header
        editorText={editorText}
        defaultGrid={defaultGrid}
        darkEditorTheme={darkEditorTheme}
        setEditorText={setEditorText}
        setDefaultGrid={setDefaultGrid}
        setDarkEditorTheme={setDarkEditorTheme}
      />

      <main className={defaultGrid ? "horizontal-grid" : "vertical-grid"}>
        <MonacoEditor
          darkEditorTheme={darkEditorTheme}
          editorText={editorText}
          setEditorText={setEditorText}
        />
        <Output markedText={markedText} />
      </main>
    </div>
  );
}
