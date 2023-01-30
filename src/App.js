import React, {useEffect, useState} from 'react';
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";


function App() {
  const [users, setUsers] = useState([])

  const addUserHandler = (user) => {
    setUsers(prev => [...prev, user])
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
