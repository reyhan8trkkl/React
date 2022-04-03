import React, { useContext } from 'react'
import { AppContext } from './context'
import User from './User'

const UserList = () => {

const {users} = useContext(AppContext)
console.log(users)
  return (
    <div>
  <h3 style={{padding:"10px 10px"}}>Avaiable Users</h3>

  {users.map(item=><User key={item.id} user={item} />)}

    </div>
  )
}

export default UserList