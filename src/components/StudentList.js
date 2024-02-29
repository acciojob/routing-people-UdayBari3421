import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const StudentList = () => {
  const [user, setUser] = useState([]);

  async function fetchUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUser(data);
  }
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {user.map((ele, i) => (
          <li>
            <NavLink to={`/users/${ele.id}`}>{ele.name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
