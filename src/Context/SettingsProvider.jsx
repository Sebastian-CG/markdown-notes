import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const SettingsContext = createContext();

export default function SettingsProvider({ children }) {
  const [layout, setLayout] = useLocalStorage("layout", "horizontal-grid");
  const [editorTheme, setEditorTheme] = useLocalStorage(
    "editor-theme",
    "vs-dark"
  );

  const changeEditorTheme = () => {
    setEditorTheme(editorTheme === "vs-dark" ? "vs-light" : "vs-dark");
  };

  const changeLayout = () => {
    setLayout(
      layout === "horizontal-grid" ? "vertical-grid" : "horizontal-grid"
    );

    window.location.reload();
  };

  const value = { editorTheme, layout, changeEditorTheme, changeLayout };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
}
