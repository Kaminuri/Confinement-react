import React from "react";
import axios from 'axios';
import sha1 from 'sha1';

var UserStateContext = React.createContext();
var UserDispatchContext = React.createContext();

function userReducer(state, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...state, isAuthenticated: true };
    case "SIGN_OUT_SUCCESS":
      return { ...state, isAuthenticated: false };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function UserProvider({ children }) {
  var [state, dispatch] = React.useReducer(userReducer, {
    isAuthenticated: !!localStorage.getItem("id_token"),
  });

  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
}

function useUserState() {
  var context = React.useContext(UserStateContext);
  if (context === undefined) {
    throw new Error("useUserState must be used within a UserProvider");
  }
  return context;
}

function useUserDispatch() {
  var context = React.useContext(UserDispatchContext);
  if (context === undefined) {
    throw new Error("useUserDispatch must be used within a UserProvider");
  }
  return context;
}

export { UserProvider, useUserState, useUserDispatch, loginUser, signOut, registerUser };

// ###########################################################
 function loginUser(dispatch, login, CurrentPassword, history, setIsLoading, setError) {
   setError(false);
   setIsLoading(true);
   var sha1 = require('sha1');
   let pwd = sha1(CurrentPassword) 
   const credentials = {
     email: login,
     password: pwd
   };
   console.log('res.data');
   let token = "";
   axios.post(`https://localhost:44314/api/Login`, { credentials })
       .then(res => {
         token = res.data.token;
       });
   if (token != "") {
     setTimeout(() => {
       sessionStorage.setItem('id_token', token)
       setError(null)
       setIsLoading(false)
       dispatch({ type: 'LOGIN_SUCCESS' })
       history.push('/app/dashboard')
     }, 2000);
   } else {
     dispatch({ type: "LOGIN_FAILURE" });
     setError(true);
     setIsLoading(false);
   }
 }
// ######################################################################################
//Sans api
//function loginUser(dispatch, login, CurrentPassword, history, setIsLoading, setError) {
//  if (login !== "" || CurrentPassword !=="") {
//    setTimeout(() => {
//      localStorage.setItem('id_token', 1)
//      setError(null)
//      setIsLoading(false)
//      dispatch({ type: 'LOGIN_SUCCESS' })
//      history.push('/app/dashboard')
//    }, 2000);
//  } else {
//    dispatch({ type: "LOGIN_FAILURE" });
//    setError(true);
//    setIsLoading(false);
//  } 
//}

function registerUser(CurrentFirstname, CurrentLastname, CurrentPassword, CurrentEmail, CurrentNickname, dispatch, history, setIsLoading, setError) {
  var sha1 = require('sha1');
  let password = sha1(CurrentPassword)  
  const player = {
      firstname: CurrentFirstname,
      password: password,
      lastname: CurrentLastname,
      email: CurrentEmail,
      nickname: CurrentNickname
    };
    let token = "";
    axios.post(`https://localhost:44314/api/Players`, { player })
      .then(res => {
        token = res.data;
      });
      setTimeout(() => {
        //localStorage.setItem('id_token', 1 )
        localStorage.setItem('id_token', token)
        setError(null)
        setIsLoading(false)
        dispatch({ type: 'LOGIN_SUCCESS' })
        history.push('/app/dashboard')
      }, 2000);
}

function signOut(dispatch, history) {
  localStorage.removeItem("id_token");
  dispatch({ type: "SIGN_OUT_SUCCESS" });
  history.push("/login");
}