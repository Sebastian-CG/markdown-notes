import styled from "styled-components";

const Editor = ({ textMarkdown, updateText }) => {
  return (
    <section>
      <TextArea
        onChange={e => updateText(e.target.value)}
        value={textMarkdown}
        placeholder="Write note..."
      />
    </section>
  );
};

export default Editor;

const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 2rem 2rem 7rem 2rem;
  color: #ffffff;
  background-color: #222222;
  resize: none;
`;
