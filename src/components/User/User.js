import React, { useState } from "react";
import "./AddUserList";
import AddUserList from "./AddUserList";
import Button from "../UI/Button";
import Errormodal from "../UI/ErrorModal";

const User = () => {
    const [enteredUserInput, setEnteredUserInput] = useState("");
    const [enteredUserAge, setEnteredUserAge] = useState("");
    const [enterCollegeName, SetUserCollegeName] = useState("")
    const [userList, setUserList] = useState([]); // Maintain a list of entered users
    const [error, seterror] = useState()

    const submitDataHandler = (event) => {
        event.preventDefault();
        if (enteredUserInput.trim().length === 0 || enteredUserAge.trim().length === 0) {
            seterror({
                title: "Invalid input",
                message: "Please enter a valid name and age(non-empty values)."
            })
            return;
        }
        if (+enteredUserAge < 1) {
            seterror({
                title: "Invalid Age",
                message: "Please enter a valid age (>0)."
            })
            return;
        }

        // Add the entered user to the list
        const newUser = {
            username: enteredUserInput,
            age: enteredUserAge,
            CollegeName: enterCollegeName
        };
        setUserList((prevUserList) => [...prevUserList, newUser]);
        setEnteredUserInput("");
        setEnteredUserAge("");
        SetUserCollegeName("")
    };

    const UsernameInputHandler = (event) => {
        setEnteredUserInput(event.target.value);
    };

    const AgeInputHandler = (event) => {
        setEnteredUserAge(event.target.value);
    };
    const CollegeNameInputHandler = (event) => {
        SetUserCollegeName(event.target.value);
    };

    const errorHandler = () => {
        seterror(null)
    }

    return (
        <div className="container vh-100 bg-dark w-75 rounded">
            {error && <Errormodal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <form className="m-3" onSubmit={submitDataHandler}>
                <label htmlFor="exampleInputEmail1" className="form-label mt-3 text-white">
                    Username
                </label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    value={enteredUserInput}
                    onChange={UsernameInputHandler}
                ></input>
                <label htmlFor="exampleInputCollegeName" className="form-label mt-3 text-white">
                    College Name
                </label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="College-Name"
                    value={enterCollegeName}
                    onChange={CollegeNameInputHandler}
                ></input>
                <label htmlFor="exampleInputPassword1" className="form-label mt-3 text-white">
                    Age(Years)
                </label>
                <input
                    type="number"
                    className="form-control  mb-3"
                    value={enteredUserAge}
                    onChange={AgeInputHandler}
                ></input>
                <Button></Button>
            </form>
            <AddUserList userList={userList} />
        </div>

    );
};

export default User;
