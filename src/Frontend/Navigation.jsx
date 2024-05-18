import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navigation = () => {
  const notify = () => toast("your fees is pending");

  return (
    <div>
      <header>
        <nav>
          <h5 style={{ float: "left", marginRight: "800px" }}>SARVAM</h5>
          <a onClick={notify}>notify</a>
          <Link to="/">Home</Link>
          <Link to="/RegistrationEntryPage">SignIn</Link>
          <Link to="/LoginPage">Login</Link>

          <ToastContainer />
        </nav>
      </header>
    </div>
  );
};

export default Navigation;