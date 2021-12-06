import { marked } from "marked";
import { useContext, useEffect, useState } from "react";
import { SettingsContext } from "../Context/SettingsProvider";

// Components
import Editor from "./Editor";
import Output from "./Output";

export default function MdConverter({ editorText, setEditorText }) {
  const [markedText, setMarkedText] = useState("");
  const { layout } = useContext(SettingsContext);

  // Actualiza el estado setMarkedText con el contenido del editor cada vez que cambia su contenido
  useEffect(() => setMarkedText(marked.parse(editorText)), [editorText]);

  return (
    <main className={layout}>
      <Editor editorText={editorText} setEditorText={setEditorText} />
      <Output markedText={markedText} />
    </main>
  );
}
