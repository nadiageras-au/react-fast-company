import React, { useState, useEffect } from "react";
import User from "./user";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";
import PropTypes from "prop-types";
import api from "../api";
import GroupList from "./groupList";

const Users = ({ users: allUsers, ...rest }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [professions, setProfession] = useState(api.professions.fetchAll());
    const [selectedProf, setSelectedProf] = useState();
    const count = allUsers.length;
    const pageSize = 4;
    useEffect(() => {
        api.professions.fetchAll().then((data) =>
            setProfession(
                Object.assign(data, {
                    allProfession: { name: "Все профессии" }
                })
            )
        );
        console.log("render");
    }, []);

    // useEffect(()=> {
    //   setCurrentPage(1);
    //   console.log(professions);
    // }, [professions]);

    const handleProfessionSelect = (item) => {
        setSelectedProf(item);
    };

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const filteredUsers =
        selectedProf && selectedProf._id
            ? allUsers.filter((user) => user.profession === selectedProf)
            : allUsers;
    const usersCrop = paginate(filteredUsers, currentPage, pageSize);

    const clearFilter = () => {};

    return (
        <>
            {professions && (
                <>
                    <GroupList
                        selectedItem={selectedProf}
                        items={professions}
                        onItemSelect={handleProfessionSelect}
                    />
                    <button
                        className="btn btn-secondary mt-2"
                        onClick={clearFilter}
                    >
                        {" "}
                        Очистить
                    </button>
                </>
            )}

            {count > 0 && (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Имя</th>
                            <th scope="col">Качества</th>
                            <th scope="col">Профессия</th>
                            <th scope="col">Встретился, раз</th>
                            <th scope="col">Оценка</th>
                            <th scope="col">Избранное</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {usersCrop.map((user) => (
                            <User
                                {...rest}
                                key={user._id}
                                // onDelete={onDelete}
                                // onToggleBookmark={onToggleBookmark}
                                {...user}
                            />
                        ))}
                    </tbody>
                </table>
            )}
            <Pagination
                itemsCount={count}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </>
    );
};

Users.propTypes = {
    users: PropTypes.array
};

export default Users;
