import "./App.css";
import Header from "./js_components/Header/Header";
import NavMeny from "./js_components/NavMeny/NavMeny";
import Profile from "./js_components/Profile/Profile";
import MessagesContainer from "./js_components/Messages/MessagesContainer";
import Nevs from "./js_components/NavMeny/Nevs/Nevs";
import Music from "./js_components/NavMeny/Music/Music";
import Settings from "./js_components/NavMeny/Settings/Settings";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import React from "react";
import UsersContainer from "./js_components/Users/UsersContainer";

function App(props) {
  return (
    <BrowserRouter>
      <div className="about">
        <Header />
        <NavMeny />
        <div className="about__content">
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/messages" element={<MessagesContainer />} />
            <Route path="/nevs" element={<Nevs />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/users" element={<UsersContainer />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
