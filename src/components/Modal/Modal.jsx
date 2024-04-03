import styles from "./Modal.module.css";

import { useEffect } from "react";

const Modal = ({ currentPoster: { src, alt }, closeModal }) => {
  useEffect(() => {
    const closeByEsc = ({ code }) => {
      if (code === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", closeByEsc);

    return () => {
      window.removeEventListener("keydown", closeByEsc);
    };
  }, [closeModal]);

  return (
    <div>
      <div>
        <button onClick={closeModal} className={styles.text}>
          Close
        </button>
        <img alt={alt} src={`https://image.tmdb.org/t/p/w500${src}`} />
      </div>
    </div>
  );
};

export default Modal;
