import React, { useEffect, useState } from "react";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";
import { AppContext } from "./components/context";
import axios from "axios";

export default function App() {
  const [users, setUsers] = useState([]);

  async function userDatas() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => console.log({ error: err }));
  }

  const dispatchUserEvent = (actionType, payload) => {
    switch (actionType) {
      case "ADD_USER":
        setUsers([...users, payload.newUser]);
        return;
      case "REMOVE_USER":
        setUsers(users.filter((user) => user.id !== payload.userId));
        return;
      default:
        return;
    }
  };
  useEffect(() => {
    userDatas();
  }, []);

  return (
    <div className="App">
      <AppContext.Provider value={{ users, dispatchUserEvent }}>
        <AddUser />
        <UserList />
      </AppContext.Provider>
    </div>
  );
}
