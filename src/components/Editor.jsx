import MonacoEditor from "@monaco-editor/react";
import { useContext } from "react";
import { SettingsContext } from "../Context/SettingsProvider";

export default function Editor({ editorText, setEditorText }) {
  const { editorTheme } = useContext(SettingsContext);

  return (
    <MonacoEditor
      theme={editorTheme}
      defaultLanguage="markdown"
      defaultValue={editorText}
      onChange={(text) => setEditorText(text)}
    />
  );
}
