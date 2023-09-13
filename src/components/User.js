import React, { useState } from "react";
import "./AddUserList";
import AddUserList from "./AddUserList";

const User = () => {
    const [enteredUserInput, setEnteredUserInput] = useState("");
    const [enteredUserAge, setEnteredUserAge] = useState("");
    const [userList, setUserList] = useState([]); // Maintain a list of entered users

    const submitDataHandler = (event) => {
        event.preventDefault();
        if (enteredUserInput.trim().length === 0 || enteredUserAge.trim().length === 0) {
            return;
        }
        if (+enteredUserAge < 1) {
            return;
        }

        // Add the entered user to the list
        const newUser = {
            username: enteredUserInput,
            age: enteredUserAge,
        };
        setUserList((prevUserList) => [...prevUserList, newUser]);

        console.log(enteredUserInput, enteredUserAge + " Years old");
        setEnteredUserInput("");
        setEnteredUserAge("");
    };

    const UsernameInputHandler = (event) => {
        setEnteredUserInput(event.target.value);
    };

    const AgeInputHandler = (event) => {
        setEnteredUserAge(event.target.value);
    };

    return (
        <div className="container bg-dark-subtle w-75 rounded">
            <form className="m-3" onSubmit={submitDataHandler}>
                <label htmlFor="exampleInputEmail1" className="form-label mt-3">
                    Username
                </label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    value={enteredUserInput}
                    onChange={UsernameInputHandler}
                ></input>
                <label htmlFor="exampleInputPassword1" className="form-label mt-3">
                    Age(Years)
                </label>
                <input
                    type="number"
                    className="form-control"
                    value={enteredUserAge}
                    onChange={AgeInputHandler}
                ></input>
                <button type="submit" className="btn btn-primary mt-3">
                    Submit
                </button>
            </form>
            <AddUserList userList={userList} />
        </div>
    );
};

export default User;
