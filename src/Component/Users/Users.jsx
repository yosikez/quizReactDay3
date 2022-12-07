import React from "react";
import "./Users.style.css";

const Users = ({ user }) => {
  return (
    <div className="outer">
      <div className="w">
        <p>{user.name}</p>
        <p>{user.phone}</p>
        <p>{user.email}</p>
        <p>{user.website}</p>
      </div>
    </div>
  );
};

export default Users;
