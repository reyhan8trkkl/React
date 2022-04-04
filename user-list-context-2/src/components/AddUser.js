import React, { useContext, useState } from "react";
import { AppContext } from "./context";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");

  const { dispatchUserEvent } = useContext(AppContext);

  const handleAddUser = () => {
    const user = { id: Math.random(), name, email, website };
    dispatchUserEvent("ADD_USER", { newUser: user });
  };

  return (
    <div style={{ padding: "10px 10px" }}>
      <h3 style={{ padding: "10px 10px" }}>Add User</h3>
      <input
        style={{ padding: "10px 10px", margin: "10px 10px" }}
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
        placeholder="name.."
      />
      <br />
      <input
        style={{ margin: "10px 10px", padding: "10px 10px" }}
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        placeholder="email.."
      />
      <br />
      <textarea
        style={{ padding: "10px 10px", margin: "10px 10px" }}
        placeholder="website.."
        onChange={(e) => setWebsite(e.target.value)}
        value={website}
      ></textarea><br/>
      <button onClick={handleAddUser} style={{ padding: "10px 10px", margin: "10px 10px" }}>
        Add User
      </button>
    </div>
  );
};

export default AddUser;
