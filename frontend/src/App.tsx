import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage.tsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
