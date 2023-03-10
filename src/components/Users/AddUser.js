import styles from './AddUser.module.css'
import {useState, useRef} from "react";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = props => {

  const [username, setUsername] = useState("")
  const [age, setAge] = useState("")
  const [invalidInput, setInvalidInput] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const usernameRef = useRef()

  const usernameChangeHandler = (e) => {
    setUsername(e.target.value)
  }
  const ageChangeHandler = (e) => {
    setAge(e.target.value)
  }
  const addUserHandler = (e) => {
    e.preventDefault()
    if (username.trim().length === 0) {
      setErrorMessage("Please enter a valid name and age (non-empty values).")
      setInvalidInput(true)
      return
    }
    if (Number(age) < 1) {
      setErrorMessage("Please enter a valid age (> 0).")
      setInvalidInput(true)
      return
    }
    setUsername("")
    setAge("")
    props.onAddUser({username: username.trim(), age: age, id: Math.random().toString()})
    usernameRef.current.focus()
  }
  const closeModalHandler = () => {
    setInvalidInput(false)
  }
  const clearListHandler = () => {
    props.onClearList()
  }

  return (
    <>
      <form onSubmit={addUserHandler} className={styles.input}>
          <label htmlFor="username">Username</label>
          <input ref={usernameRef} id="username" type="text" value={username} onChange={usernameChangeHandler} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" value={age} onChange={ageChangeHandler} />
          <div className={styles.actions}>
            <Button type="submit">Add User</Button>
            <Button type="button" onClick={clearListHandler}>Clear List</Button>
          </div>
      </form>
      {invalidInput && <ErrorModal title="Invalid input" content={errorMessage} onClose={closeModalHandler} />}
    </>
  )

}
export default AddUser
