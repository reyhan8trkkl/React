import React, { useContext } from "react";
import { UserContext } from "./context/UserContext";
import User from "./User";


export default function UserList() {

 const {users} = useContext(UserContext);
  
  return (
    <div>
      <h2 style={{ padding: "10px 10px" }}>User List</h2>
      <div style={{ display: "flex", alignSelf: "center" }}>
        {users.map((item) => (
          <User key={item.id} user={item} />
        ))}
      </div>
    </div>
  );
}
