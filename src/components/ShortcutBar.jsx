import styled from "styled-components";
import MarkDownElements from "../static/md-elements";

import { IoMdAdd } from "react-icons/io";

const ShortcutBar = ({ refShortcutBar, addElement }) => {
  return (
    <Bar ref={refShortcutBar}>
      {MarkDownElements.map((e, i) => (
        <BarElement onClick={() => addElement(e.markDown)} key={i}>
          <span>{e.content}</span>
          <IoMdAdd />
        </BarElement>
      ))}
    </Bar>
  );
};

export default ShortcutBar;

const Bar = styled.section`
  position: fixed;
  top: 0;
  left: 0;

  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 4rem;
  gap: 2rem;

  width: 20rem;
  height: 100vh;
  padding: 2rem 1rem;

  background-color: #10b981;
  overflow: auto;

  transition: transform 0.3s ease;
  transform: translateX(-100%);

  @media (min-width: 600px) {
    position: static;
    transform: translateX(0);
  }
`;

const BarElement = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 1rem;

  font-size: 1.6rem;
  font-weight: 500;

  border-radius: 1rem;
  box-shadow: none;
`;
