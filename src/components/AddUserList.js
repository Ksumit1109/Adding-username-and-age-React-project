import React from "react";

function AddUserList(props) {
  return (
    <div>
      <ul className="list-group mb-2">
        {props.userList.map((user, index) => (
          <li className="list-group-item list-group-item-action list-group-item-light" key={index}>
            {user.username} ({user.age} years old)
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AddUserList;
