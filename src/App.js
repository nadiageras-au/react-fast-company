import React, { useState } from "react";

import SearchStatus from "../src/components/searchStatus";
import Users from "../src/components/users";
import api from "./api";

function App() {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (userId) => {
    setUsers((users) => {
      return (users = users.filter((user) => user._id !== userId));
    });
  };

  const handleToggleBookmark = (userId, marked) => {
    marked = !marked;

    const updatedBookmark = users.map((item) => {
      if (item._id === userId) {
        item.marked = marked;
      }
      return item;
    });

    setUsers(updatedBookmark);
  };

  return (
    <div>
      <SearchStatus length={users.length} />
      <Users
        onDelete={handleDelete}
        onToggleBookmark={handleToggleBookmark}
        users={users}
        length={users.length}
      />
    </div>
  );
}

export default App;
