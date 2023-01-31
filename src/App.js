import React, {useEffect, useState} from 'react';
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";


function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    setUsers(JSON.parse(localStorage.getItem('users')))
  }, [])

  const addUserHandler = (user) => {
    setUsers(prev => {
      localStorage.setItem('users', JSON.stringify([...prev, user]))
      return [...prev, user]
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
