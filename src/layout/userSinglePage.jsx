import React, { useState, useEffect } from "react";
import api from "../api";
import QualitiesList from "../components/qualitiesList";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./userSinglePage.css";

const UserSinglePage = ({ id }) => {
    const [user, setUser] = useState();
    useEffect(() => {
        api.users.getById(id).then((data) => setUser(data));
    }, []);

    if (user) {
        return (
            <div className="user__block">
                <h1> {user.name}</h1>
                <p>Профессия: {user.profession.name}</p>
                <QualitiesList qualities={user.qualities} />
                <p>Completed Meetings: {user.completedMeetings}</p>
                <h2>Rate: {user.rate}</h2>
                <Link to="/users" className="btn btn-secondary">
                    All Users
                </Link>
            </div>
        );
    }
    return <h1>loading</h1>;
};

// UserSinglePage.propTypes = {
//     match: PropTypes.object
// };
UserSinglePage.propTypes = {
    id: PropTypes.string,
    match: PropTypes.object
};

export default UserSinglePage;
