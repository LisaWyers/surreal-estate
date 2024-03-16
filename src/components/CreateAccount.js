import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import Alert from "./Alert";
import "../styles/create-account.css";

const CreateAccount = () => {
  const initialState = {
    fields: {
      email: "",
      password: "",
    },
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);
  const navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();
    setAlert({ message: "", isSuccess: false });
    createUserWithEmailAndPassword(auth, fields.email, fields.password)
      .then((userCredential) => {
        // Signed in
        const { user } = userCredential;
        console.log("Account Created");
        setAlert({
          message: "Your account has been created!",
          isSuccess: true,
        });
        // setLoggedIn(user);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + errorMessage);
        setAlert({ message: errorMessage, isSuccess: false });
        setFields(initialState.fields);
      });
  };

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setFields({ ...fields, [name]: value });
  };

  return (
    <div className="sign-up">
      <Alert message={alert.message} success={alert.isSuccess} />
      <form className="sign-up-form" onSubmit={handleSignUp}>
        <label htmlFor="email">
          Email: <br />
          <br />
          <input
            id="email"
            name="email"
            value={fields.email}
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="password">
          Password: <br />
          <br />
          <input
            id="password"
            name="password"
            type="password"
            value={fields.password}
            onChange={handleFieldChange}
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default CreateAccount;