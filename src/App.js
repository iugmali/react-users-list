import React, {useEffect, useState} from 'react';
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";


function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    setUsers(JSON.parse(localStorage.getItem('react_users_list')) ?? [])
  }, [])

  const addUserHandler = (user) => {
    setUsers(prev => {
      localStorage.setItem('react_users_list', JSON.stringify([...prev, user]))
      return [...prev, user]
    })
  }

  const clearListHandler= () => {
    localStorage.removeItem('react_users_list')
    setUsers([])
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} onClearList={clearListHandler} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
