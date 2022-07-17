import React from "react";

import LoginRegisterDisplay from "./LoginRegisterDisplay";
import { withRouter, Redirect } from "react-router-dom";
class LoginPage extends React.Component {
  constructor() {
    super();

    this.state = {
      
      login: true,
      register: false,
      signup: {
        name: "",
        email: "",
        password: "",
        phone:"",
        dropdown:""
      },
      signin: {
        name: "",
        password: "",
      },
      signupError: "",
      signinError: "",
    };
  }

  registerHandler = () => {
    const input = this.state.signup;
    input.email = "";
    input.name = "";
    input.password = "";
    this.setState({
      ...this.state,
      register: true,
      login: false,
      input,
    });
  };

  loginHandler = () => {
    this.setState({
      ...this.state,
      register: false,
      login: true,
    });
    
  };

  signinInputName = (e) => {
    const input = this.state.signin;
    input.name = e.target.value;
    this.setState({
      ...this.state,
      input,
    });
  };
  signinInputPassword = (e) => {
    const input = this.state.signin;
    input.password = e.target.value;
    this.setState({
      ...this.state,
      input,
    });
  };

  signInHandler = () => {
    if (this.state.signin.name && this.state.signin.password) {
      let credentials = JSON.parse(localStorage.getItem("register"));

      if (credentials === null || credentials === undefined) {
        this.setState({
          ...this.state,
          signinError: "Looks like new user, please register",
        });
      } else {
        if (
          this.state.signin.name !== credentials.name ||
          this.state.signin.password !== credentials.password
        ) {
          this.setState({
            ...this.state,
            signinError: "ENTER VALID CREDENTIALS",
          });
        } else {
          this.setState({
            ...this.state,
            signinError: "",
          });
          localStorage.setItem("islogged",JSON.stringify(true))
          this.props.history.push("/movies");
        }
      }
    } else {
      this.setState({
        ...this.state,
        signinError: "Please fill all the fields",
      });
    }
  };

  signupInputName = (e) => {
    const input = this.state.signup;
    input.name = e.target.value;
    this.setState({
      ...this.state,
      input,
    });
  };
  signupInputPassword = (e) => {
    const input = this.state.signup;
    input.password = e.target.value;
    this.setState({
      ...this.state,
      input,
    });
  };
  signupInputEmail = (e) => {
    const input = this.state.signup;
    input.email = e.target.value;
    this.setState({
      ...this.state,
      input,
    });
  };

  signupInputphone = (e) => {
    const input = this.state.signup;
    input.phone = e.target.value;
    this.setState({
      ...this.state,
      input,
    });
  };

  signupdropdown = (e) => {
    const input = this.state.signup;
    input.dropdown = e.target.value;
    this.setState({
      ...this.state,
      input,
    });
  };

  signupHandler = () => {
    if (
      !this.state.signup.email ||
      !this.state.signup.name ||
      !this.state.signup.password
    ) {
      this.setState({
        ...this.state,
        signupError: "Fill all the fields",
      });
    } else {
      this.setState({
        ...this.state,
        signupError: "",
        login: true,
        register: false,
      });

      localStorage.setItem("register", JSON.stringify(this.state.signup));
    }
  };

  render() {
    
    return (
      <div style={{ marginTop: "40px" }}>
        <LoginRegisterDisplay
          registerHandler={this.registerHandler}
          loginHandler={this.loginHandler}
          login={this.state.login}
          register={this.state.register}
          signupHandler={this.signupHandler}
          signupInputName={this.signupInputName}
          signupInputEmail={this.signupInputEmail}
          signupInputPassword={this.signupInputPassword}
          signupInputphone={this.signupInputphone}
          signupdropdown={this.signupdropdown}
          signupError={this.state.signupError}
          signinInputName={this.signinInputName}
          signinInputPassword={this.signinInputPassword}
          signinError={this.state.signinError}
          signInHandler={this.signInHandler}
        />
      </div>
    );
  }
}

export default withRouter(LoginPage);
