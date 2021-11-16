import styled from "styled-components";

const Output = ({ refOutput, markedText }) => {
  return <OutputContainer ref={refOutput} dangerouslySetInnerHTML={{ __html: markedText }} />;
};

export default Output;

const OutputContainer = styled.section`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100vh;
  padding: 2rem 2rem 7rem 2rem;

  font-size: 1.6rem;

  background-color: #ffffff;

  transition: transform 0.3s ease;
  transform: translateX(100%);
  overflow: auto;

  @media (min-width: 1000px) {
    position: static;
    transform: translateX(0);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2.5rem;
  }

  h3 {
    font-size: 2.2rem;
  }

  h4 {
    font-size: 1.9rem;
  }

  h5 {
    font-size: 1.6rem;
  }

  h6 {
    font-size: 1.3rem;
  }

  p {
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }

  pre {
    max-width: 30rem;
    background-color: #eee;
    padding: 1rem;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    border-radius: 0.5rem;
    overflow: auto;

    @media (min-width: 500px) {
      max-width: 25rem;
    }

    @media (min-width: 600px) {
      max-width: 30rem;
    }

    @media (min-width: 700px) {
      max-width: 30.5rem;
    }

    @media (min-width: 800px) {
      max-width: 40rem;
    }

    @media (min-width: 900px) {
      max-width: 40.5rem;
    }

    @media (min-width: 1000px) {
      max-width: 50rem;
    }

    code {
      min-width: 30rem;
    }
  }

  img {
    width: 100%;
    min-width: 0;
    border-radius: 0.5rem;
  }

  ul {
    padding-left: 2rem;
    margin-bottom: 1rem;
  }

  table {
    margin: 1rem 0;
    background: #ffffff;
    border-radius: 0.5rem;

    code {
      padding: 0 0.4rem;
      background-color: #f6f8fa;
      border-radius: 0.5rem;
    }

    tr,
    td {
      background: #eee;
    }

    td img {
      width: 2rem;
      box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12),
        0px 1px 5px 0px rgba(0, 0, 0, 0.2);
    }

    th,
    td {
      display: table-cell;
      text-align: left;
      padding: 0.5rem 1rem;
    }
  }

  blockquote {
    padding-left: 1.2rem;
    border-left: 0.5rem solid #4dbc88;
  }
`;
