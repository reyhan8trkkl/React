import React from "react";
import User from "./User";

export default function UserList({ changeColor, users }) {
  return (
    <div>
      <h2 style={{ padding: "10px 10px" }}>User List</h2>
      <div style={{ display: "flex", alignSelf: "center" }}>
        {users.map((item) => (
          <User key={item.id} user={item} changeColor={changeColor} />
        ))}
      </div>
    </div>
  );
}
