import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import JoinPage from "./pages/JoinPage";
import Chat from "./pages/Chat";
import IndexPage from "./pages/WelcomePage";
import AuthGuard from "./hook/GuardRote";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/chat/:id" element={<AuthGuard  children={<Chat />} />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </div>
  );
}

export default App;
