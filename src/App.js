import React from "react";
import { Route, Switch } from "react-router";
// import Users from "../src/components/users";
import NavBar from "./components/navBar";
import LoginPage from "./layout/loginPage";
import MainPage from "./layout/MainPage";
import UserListPage from "./layout/userListPage";
// import UserSinglePage from "./layout/userSinglePage";
// import UserSinglePage from "./layout/userSinglePage";
// import api from "./api";

function App() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/" exact component={MainPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/users/:userId?" component={UserListPage} />
            </Switch>

            {/* <Users /> */}
        </div>
    );
}

export default App;
