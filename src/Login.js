import React, { useState, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer = (state, action)=>{
  if(action.type === "USER INPUT"){
    return{value:action.val , isValid: action.val.includes('@')}
  }
  if(action.type === "INPUT BLUR"){
    return{value: state.value , isValid: state.value.includes('@')}
  }
  return {value: "", isValid : false};
}

const passwordReducer = (state, action)=>{
  if(action.type === "USER PASSWORD"){
    return{value: action.val , isValid : action.val.trim().length > 6 }
  }

  if(action.type === "INPUTFIELD BLUR"){
    return{value: state.value, isValid: state.value.trim().length > 6}
  }
  return{value: "", isValid: false}
}

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [enteredCollegeName, setEnteredCollegeName] = useState('');
  const [collegeNameIsValid, setCollegeNameIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState , dispatchEmail] = useReducer(emailReducer, {value : "", isValid: false})
  const [passwordState , dispatchPassword] = useReducer(passwordReducer , {value : "" , isValid: false})
  // useEffect(() => {
  //   const Timeout = setTimeout(() => {
  //     console.log("set")
  //     setFormIsValid(
  //       emailState.value.includes('@') && enteredPassword.trim().length > 6
  //     )

  //   }, 500);
    
  //   return ()=>{
  //     clearTimeout(Timeout)
  //     console.log("Clear")
  //   }
  // })
  
  
  const emailChangeHandler = (event) => {
    dispatchEmail({type : "USER INPUT", val: event.target.value})
    setFormIsValid(
      event.target.value.includes('@') &&
      passwordState.isValid > 6 &&
      enteredCollegeName.trim() !== ''
    );
  }

  const passwordChangeHandler = (event) => {
    dispatchPassword({type : "USER PASSWORD", val: event.target.value})

    setFormIsValid(
      event.target.value.trim().length > 6 &&
      emailState.isValid &&
      enteredCollegeName.trim() !== ''
    );
  };

  const collegeNameChangeHandler = (event) => {
    setEnteredCollegeName(event.target.value);

    
  };

  const validateEmailHandler = () => {
    dispatchEmail({type: "INPUT BLUR"})
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type: "INPUTFIELD BLUR"})
  };

  const validateCollegeNameHandler = () => {
    setCollegeNameIsValid(enteredCollegeName.trim() !== '');
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value, enteredCollegeName);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${emailState.isValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${passwordState.isValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div
          className={`${classes.control} ${collegeNameIsValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="collegeName">College Name</label>
          <input
            type="text"
            id="collegeName"
            value={enteredCollegeName}
            onChange={collegeNameChangeHandler}
            onBlur={validateCollegeNameHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
