import { useState } from "react";
import Todo from "./Todo/Todo";
import Login from "./Onboarding/Login";
import Signup from "./Onboarding/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
