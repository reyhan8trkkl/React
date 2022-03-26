import React from "react";
import { useState } from "react";
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

  return (
    <div>
      <UserList users={users} changeColor={changeColor} />
    </div>
  );
}
