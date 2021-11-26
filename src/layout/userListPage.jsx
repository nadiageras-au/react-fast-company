import React from "react";
//  import Pagination from "../components/pagination";
// import { paginate } from "../utils/paginate";
import PropTypes from "prop-types";
import UserSinglePage from "./userSinglePage";
import Users from "../components/users";
// import api from "../api";
// import GroupList from "../components/groupList";
// import SearchStatus from "../components/searchStatus";
// import UsersTable from "../components/usersTable";
// import _ from "lodash";

const UserListPage = ({ match }) => {
    const userId = match.params.userId;
    console.log(userId);
    return <>{userId ? <UserSinglePage id={userId} /> : <Users />}</>;
};

UserListPage.propTypes = {
    //  users: PropTypes.array
    match: PropTypes.object
};

export default UserListPage;
