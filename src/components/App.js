import React from "react";
import "./../styles/App.css";
import StudentList from "./StudentList";
import { Route, Routes } from "react-router-dom";
import StudentDetails from "./StudentDetails";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<StudentList />} />
        <Route path="/users/:id" element={<StudentDetails />} />
      </Routes>
    </div>
  );
};

export default App;
