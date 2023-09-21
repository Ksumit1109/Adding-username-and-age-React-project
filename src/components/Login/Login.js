import React, { useState, useEffect, useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';
import Input from '../UI/Input/Input'
// const emailReducer = (state, action)=>{
//   if(action.type === "USER INPUT"){
//     return{value:action.val , isValid: action.val.includes('@')}
//   }
//   if(action.type === "INPUT BLUR"){
//     return{value: state.value , isValid: state.value.includes('@')}
//   }
//   return {value: "", isValid : false};
// }

// const passwordReducer = (state, action)=>{
//   if(action.type === "USER PASSWORD"){
//     return{value: action.val , isValid : action.val.trim().length > 6 }
//   }

//   if(action.type === "INPUTFIELD BLUR"){
//     return{value: state.value, isValid: state.value.trim().length > 6}
//   }
//   return{value: "", isValid: false}
// }

const Login = () => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [enteredCollegeName, setEnteredCollegeName] = useState('');
  const [collegeNameIsValid, setCollegeNameIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const authCtx = useContext(AuthContext)

  // const [emailState , dispatchEmail] = useReducer(emailReducer, {value : "", isValid: false})
  // const [passwordState , dispatchPassword] = useReducer(passwordReducer , {value : "" , isValid: false})
  useEffect(() => {
    const Timeout = setTimeout(() => {
      console.log("set")
      setFormIsValid(
        enteredEmail.includes('@') && enteredPassword.trim().length > 6 && enteredCollegeName.trim() !== ''
      )

    }, 500);


    return () => {
      clearTimeout(Timeout)
      console.log("Clear")
    }
  }, [enteredEmail, enteredPassword, enteredCollegeName])


  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value)
  }

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value)
  };

  const collegeNameChangeHandler = (event) => {
    setEnteredCollegeName(event.target.value);
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'))
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6)
  };

  const validateCollegeNameHandler = () => {
    setCollegeNameIsValid(enteredCollegeName.trim() !== '');
  };

  const submitHandler = (event) => {
    event.preventDefault();
    authCtx.onLogin(enteredEmail, enteredPassword, enteredCollegeName);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          id="email"
          label="E-Mail"
          type="email"
          value={enteredEmail}
          isValid={emailIsValid}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          id="password"
          label="Password"
          type="password"
          value={enteredPassword}
          isValid={passwordIsValid}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <Input
          id="collegeName"
          label="College Name"
          type="text"
          value={enteredCollegeName}
          isValid={collegeNameIsValid}
          onChange={collegeNameChangeHandler}
          onBlur={validateCollegeNameHandler}
        />
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
