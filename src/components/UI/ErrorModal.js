import styles from './ErrorModal.module.css'
import Button from "./Button";

const ErrorModal = ({title, content, onClose}) => {
  const closeModalHandler = () => {
    onClose()
  }

  return (
    <>
      <div className={styles.backdrop} onClick={closeModalHandler}></div>
      <div className={styles.modal}>
        <header className={styles.header}>
          <h2>{title}</h2>
        </header>
        <div className={styles.content}>
          <p>{content}</p>
        </div>
        <footer className={styles.actions}>
          <Button type="button" onClick={closeModalHandler} >Okay</Button>
        </footer>
      </div>
    </>
  )
}

export default ErrorModal