import styles from './AddUser.module.css'
import {useState} from "react";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = props => {

  const [username, setUsername] = useState("")
  const [age, setAge] = useState("")
  const [invalidInput, setInvalidInput] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const handleUsernameInput = (e) => {
    setUsername(e.target.value)
  }
  const handleAgeInput = (e) => {
    setAge(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (username.trim().length === 0) {
      setErrorMessage("Please enter a valid name and age (non-empty values).")
      setInvalidInput(true)
      return
    }
    if (age < 1) {
      setErrorMessage("Please enter a valid age (> 0).")
      setInvalidInput(true)
      return
    }
    setUsername("")
    setAge("")
    props.onAddUser({username: username, age: age, id: Math.random().toString()})
  }
  const closeModal = () => {
    setInvalidInput(false)
  }
  return (
    <>
      <form onSubmit={handleSubmit} className={styles.input}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" value={username} onChange={handleUsernameInput} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" value={age} onChange={handleAgeInput} />
          <Button type="submit">Add User</Button>
      </form>
      {invalidInput ? <ErrorModal title="Invalid input" content={errorMessage} onClose={closeModal} /> : ""}
    </>
  )

}
export default AddUser
