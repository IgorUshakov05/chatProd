import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import JoinPage from "./pages/JoinPage";
import Chat from "./pages/Chat";
import IndexPage from "./pages/WelcomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/join" element={<JoinPage />} />
      </Routes>
    </div>
  );
}

export default App;
