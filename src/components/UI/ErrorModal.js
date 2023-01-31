import styles from './ErrorModal.module.css'
import Button from "./Button";
import {createPortal} from "react-dom";

const ErrorModal = ({title, content, onClose}) => {
  const closeModalHandler = () => {
    onClose()
  }

  return (
    <>
      {createPortal(<div className={styles.backdrop} onClick={closeModalHandler}></div>, document.body)}
      {createPortal(<div className={styles.modal}>
        <header className={styles.header}>
          <h2>{title}</h2>
        </header>
        <div className={styles.content}>
          <p>{content}</p>
        </div>
        <footer className={styles.actions}>
          <Button type="button" onClick={closeModalHandler} >Okay</Button>
        </footer>
      </div>, document.body)}
    </>
  )
}

export default ErrorModal