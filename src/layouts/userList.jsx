import React from "react";
import PropTypes from "prop-types";
import UserSinglePage from "../components/page/userSinglePage";
import UsersListPage from "../components/page/usersListPage";

const UserList = ({ match }) => {
    const userId = match.params.userId;
    console.log(userId);
    return <>{userId ? <UserSinglePage id={userId} /> : <UsersListPage />}</>;
};

UserList.propTypes = {
    match: PropTypes.object
};

export default UserList;
