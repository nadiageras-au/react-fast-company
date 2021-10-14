import React, { useState } from "react";
import Users from "../src/components/users";
import SearchStatus from "../src/components/searchStatus";
import api from "./api";

function App() {
  const [users, setUsers] = useState(api.users.fetchAll());
  // let countUsers = users.length;
  // console.log(countUsers);

  const handleDelete = (userId) => {
    setUsers((users) => {
      return (users = users.filter((user) => user._id !== userId.id));
    });
  };

  return (
    <div>
      <SearchStatus />
      <Users onDelete={handleDelete} users={users} />
    </div>
  );
}

export default App;
