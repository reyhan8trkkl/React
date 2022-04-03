import React, { useState } from "react";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";
import { AppContext } from "./components/context";

export default function App() {
  const userList = [
    {
      id: 1,
      name: "Leanne Graham",
      email: "Sincere@april.biz",
      website: "hildegard.org",
    },
  ];

  const [users, setUsers] = useState(userList);

  const dispatchUserEvent = (actionType, payload) => {
    switch (actionType) {
      case "ADD_USER":
        setUsers([...users, payload.newUser]);
        return;
      case 'REMOVE_USER':
        setUsers(users.filter(user => user.id === payload.userId))
        return;
      default:
        return;
    }
  };

  return (
    <div className="App">
      <AppContext.Provider value={{ users,dispatchUserEvent }}>
        <AddUser />
        <UserList />
      </AppContext.Provider>
    </div>
  );
}
