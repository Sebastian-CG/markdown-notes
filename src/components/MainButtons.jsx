import styled from "styled-components";

import { IoMdMenu, IoMdTrash, IoIosEye } from "react-icons/io";
import { MdFileUpload, MdDownload } from "react-icons/md";

const MainButtons = ({
  refShortcutBar,
  refOutput,
  refUploadFileInput,
  toggleItem,
  downloadMarkdown,
  deleteTextMarkdown,
  openFilebrowser,
  fileUpload,
}) => {
  return (
    <Container>
      {/* View button */}
      {window.innerWidth <= 1000 && (
        <button className="view-btn" onClick={() => toggleItem(refOutput)}>
          <IoIosEye />
        </button>
      )}

      {/* Delete button */}
      <button onClick={deleteTextMarkdown}>
        <IoMdTrash />
      </button>

      {/* upload file button */}
      <button onClick={openFilebrowser}>
        <MdFileUpload />

        <input
          className="input-file"
          onChange={fileUpload}
          ref={refUploadFileInput}
          type="file"
          accept=".md,.mdown,.txt,.markdown"
        />
      </button>

      {/* Download button */}
      <button onClick={downloadMarkdown}>
        <MdDownload />
      </button>

      {/* Menu button */}
      {window.innerWidth <= 600 && (
        <button onClick={() => toggleItem(refShortcutBar)}>
          <IoMdMenu />
        </button>
      )}
    </Container>
  );
};

export default MainButtons;

const Container = styled.div`
  position: fixed;
  right: 1rem;
  bottom: 1rem;

  display: grid;
  grid-template-columns: 4rem;
  grid-auto-rows: 4rem;
  gap: 1rem;

  button {
    display: grid;
    place-content: center;

    font-size: 2rem;

    color: white;
    background-color: #10b981;

    border-radius: 1.5rem;
  }

  .input-file {
    display: none;
  }
`;
