import Editor from "@monaco-editor/react";

export default function MonacoEditor({
  darkEditorTheme,
  editorText,
  setEditorText,
}) {
  return (
    <Editor
      theme={darkEditorTheme ? "vs-dark" : "vs-light"}
      defaultLanguage="markdown"
      defaultValue={editorText}
      onChange={(text) => setEditorText(text)}
    />
  );
}
