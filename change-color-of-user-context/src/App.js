import React from "react";
import { useState } from "react";
import { UserContext } from "./context/UserContext";
import UserList from "./UserList";

const data = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    color: "pink",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    color: "purple",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    color: "skyblue",
  },
];

export default function App() {
  const [users, setcolor] = useState(data);

  const changeColor = (id, color) => {
    setcolor(
      users.map((item, index) =>
        item.id === id ? { ...item, color: color } : item
      )
    );
  };
  // newname:users -44.line
  return (
    <div className="App">
      <UserContext.Provider value={{ changeColor, users }}>
        <UserList />
      </UserContext.Provider>
    </div>
  );
}
