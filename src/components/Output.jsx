import { useEffect, useState } from "react";

export default function Output({ markedText }) {
  const [windowWidth, setWindowWidth] = useState(window.outerWidth);

  window.addEventListener("resize", () => setWindowWidth(window.outerWidth));

  /**
   * Calcula el acho que deve tener los bloques de codigo.
   * Esto se hace par que el bloque de codigo tenga un scroll horizontal
   * cuando su contendio lo supere.
   */
  useEffect(() => {
    const padding = windowWidth >= 768 ? 90 : 30;
    const allPreElements = Array.from(document.querySelectorAll("pre"));

    allPreElements.forEach((preElement) => {
      preElement.style.maxWidth = `${(windowWidth - padding) / 2}px`;
    });
  }, [markedText, windowWidth]);

  // A cada elemento <pre> se le agrega un boton para copiar el contenido
  useEffect(() => {
    const allPreElements = Array.from(document.querySelectorAll("pre"));

    allPreElements.forEach((preElement) => {
      const toggleButton = () => button.classList.toggle("visible-copy-button");

      // Copy el texto que se le pase por parametro en el clipboard eliminando los ultimos 6 caracteres
      const copyText = (text) => {
        const textToCopy = text.slice(0, text.length - 6);
        navigator.clipboard.writeText(textToCopy);
      };

      const button = document.createElement("button");
      button.classList.add("copy-button");
      button.innerText = "Copy";
      preElement.appendChild(button);

      preElement.addEventListener("mouseenter", toggleButton);
      preElement.addEventListener("mouseleave", toggleButton);
      button.addEventListener("click", () => copyText(preElement.innerText));
    });
  }, [markedText]);

  return (
    <section
      className="markdown-body"
      dangerouslySetInnerHTML={{ __html: markedText }}
    />
  );
}
