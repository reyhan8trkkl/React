import React, { useContext } from "react";
import { AppContext } from "./context";
import User from "./User";

const UserList = () => {
  const { users } = useContext(AppContext);

  return (
    <div>
      <h3 style={{ padding: "10px 10px" }}>Avaiable Users</h3>
      {users !== []
        ? users.map((item) => <User key={item.email} user={item} />)
        : console.log("error")}
    </div>
  );
};

export default UserList;
