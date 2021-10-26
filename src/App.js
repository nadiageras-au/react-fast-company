import React, { useState, useEffect } from "react";
import Users from "../src/components/users";
import api from "./api";

function App() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data));
    }, []);

    const handleDelete = (userId) => {
        setUsers((users) => {
            return (users = users.filter((user) => user._id !== userId));
        });
    };

    const handleToggleBookmark = (userId) => {
        const updatedBookmark = users.map((item) => {
            if (item._id === userId) {
                item.marked = !item.marked;
            }
            return item;
        });

        setUsers(updatedBookmark);
    };

    return (
        <div>
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
