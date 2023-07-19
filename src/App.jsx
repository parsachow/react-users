import { useState } from 'react'
import UserListItem from './UserListItem'
import './App.css'

export default function App() {
  const [users, setUsers] = useState([
    { name: "Anna", email: "ana@ana.com", country: "United States" },
    { name: "Suzan", email: "suzan@suzan.com", country: "United Kingdom" },
    { name: "Barbara", email: "barb@barbara.com", country: "United States" },
  ])
  
  //generating a list of userlistitem components representing every object in our user state
  const userListItems = users.map((employeeObject, idx) => {//return value is the new array item in the userlistitem
    return <UserListItem employee={employeeObject} />
  })

  return (
    <>
      {userListItems}
    </>
  )
}


