import React from "react";
import "./App.css";

const UserList = ({ listOfUsers }: any) => {
  return (
    <div>
      <table className="table_details">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {listOfUsers?.map((user: any, index: any) => (
            <tr key={user.name}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
