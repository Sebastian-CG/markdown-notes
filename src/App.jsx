import useLocalStorage from "./hooks/useLocalStorage";

// Context
import SettingsProvider from "./Context/SettingsProvider";

// Components
import Header from "./components/Header";
import MdConverter from "./components/MdConverter";

export default function App() {
  const [editorText, setEditorText] = useLocalStorage("editorText", "");

  return (
    <SettingsProvider>
      <div className="container">
        <Header editorText={editorText} setEditorText={setEditorText} />
        <MdConverter editorText={editorText} setEditorText={setEditorText} />
      </div>
    </SettingsProvider>
  );
}
