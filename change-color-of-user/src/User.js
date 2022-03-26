import React from "react";

export default function User({ user, changeColor }) {
  return (
    <div
      style={{
        background: user.color,
        padding: "4px",
        borderBottom: "1px solid",
      }}
    >
      <h4>Name : {user.name}</h4>
      <br />
      <p>Email : {user.email}</p>
      <br />
      <p>UserName : {user.username}</p>
      <br />
      <p>Color : {user.color}</p>
      <br />
      <label>New color : </label>
      <br />
      <input
        style={{ marginTop: "10px" }}
        value={user.color}
        onChange={(e) => changeColor(user.id, e.target.value)}
      />
    </div>
  );
}
