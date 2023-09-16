import React from "react";

function AddUserList(props) {
  return (
    <div className="container w-75">
      <ul className="list-group">
        {props.userList.map((user, index) => (
          <li className="m-1 list-group-item list-group-item-action list-group-item-info" key={index}>
            {user.username} {user.CollegeName} ({user.age} years old)
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AddUserList;
