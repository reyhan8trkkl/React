import React, { useContext } from "react";
import { AppContext } from "./context";

const User = ({ user }) => {
  const { dispatchUserEvent } = useContext(AppContext);

  const handleRemoveUser = () => {
    dispatchUserEvent("REMOVE_USER", { userId: user.id });
  };

  return (
    <div
      style={{
        border: "1px solid gray",
        display: "inline-block",
        padding: "10px",
      }}
    >
      <h3>{user.name}</h3>
      <br />
      <h4>{user.email}</h4>
      <br />
      <div>
        <small>{user.website}</small>
      </div>
      <br />
      <button onClick={handleRemoveUser} style={{ padding: "10px 10px", margin: "10px 10px" }}>
        Delete
      </button>
    </div>
  );
};

export default User;
