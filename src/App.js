import React from "react";
import { Route, Switch } from "react-router";
import NavBar from "./components/ui/navBar";
import Login from "./layouts/login";
import MainPage from "./layouts/Main";
import UserListPage from "./layouts/userList";
// import UserSinglePage from "./layout/userSinglePage";
// import UserSinglePage from "./layout/userSinglePage";
// import api from "./api";

function App() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/" exact component={MainPage} />
                <Route path="/login/:type?" component={Login} />
                <Route path="/users/:userId?" component={UserListPage} />
            </Switch>

            {/* <Users /> */}
        </div>
    );
}

export default App;
