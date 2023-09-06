import "./App.css";
import MessagesContainer from "./js_components/Messages/MessagesContainer";
import Nevs from "./js_components/NavMenu/Nevs/Nevs";
import Music from "./js_components/NavMenu/Music/Music";
import Settings from "./js_components/NavMenu/Settings/Settings";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import React from "react";
import HeaderContainer from "./js_components/Header/HeaderContainer";
import NavMenuContainer from "./js_components/NavMenu/NavMenuContainer";
import LoginContainer from "./js_components/Login/LoginContainer";
import Twist from "./js_components/Users/Twist";
import { suspense } from "./hoc/suspense";
const UsersContainer = React.lazy(() =>
  import("./js_components/Users/UsersContainer")
);
const ProfileContainerLocation = React.lazy(() =>
  import("./js_components/Profile/ProfileContainerLocation")
);

function App({ initialization }) {
  if (!initialization) return <Twist />;
  return (
    <BrowserRouter>
      <div className="about">
        <HeaderContainer />
        <NavMenuContainer />
        <div className="about__content">
          <Routes>
            <Route
              path="/profile/:userId?"
              element={suspense(ProfileContainerLocation)}
            />
            <Route path="/login" element={<LoginContainer />} />
            <Route path="/messages" element={<MessagesContainer />} />
            <Route path="/nevs" element={<Nevs />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/users" element={suspense(UsersContainer)} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
