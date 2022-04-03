import React from 'react'

const User = ({user}) => {
  return (
    <div style={{border:"1px solid gray", display:"inline-block",padding:"10px"}}>
    <h3>{user.name}</h3>
    <h4>{user.email}</h4>
    <div>
      <small>{user.website}</small>
      </div>

    </div>
  )
}

export default User