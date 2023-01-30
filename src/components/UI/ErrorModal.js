import styles from './ErrorModal.module.css'
import Button from "./Button";

const ErrorModal = ({title, content, onClose}) => {
  const closeModalHandler = () => {
    onClose()
  }

  return (
    <div className={styles.backdrop}>
        <div className={styles.modal}>
            <div className={styles.header}>
              <h2>{title}</h2>
            </div>
            <div className={styles.content}>
              {content}
            </div>
            <div className={styles.actions}>
              <Button type="button" onClick={closeModalHandler} >Okay</Button>
            </div>
        </div>
    </div>

  )
}

export default ErrorModal