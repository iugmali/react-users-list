import styles from './UsersList.module.css'

const UsersList = ({users}) => {
  return users.length === 0 ? (<div></div>) : (
    <div className={styles.users}>
        <ul>
          {users.map(user => (
            <li key={user.id}>
              {user.username} ({user.age} years old)
            </li>
          ))}
        </ul>
    </div>
  )
}

export default UsersList