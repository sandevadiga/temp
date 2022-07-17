import React from "react";

import "./Styles/LoginRegister.scss";
const Details = (props) => {
  const {
    registerHandler,
    loginHandler,
    login,
    register,
    signupHandler,
    signupInputName,
    signupInputEmail,
    signupInputPassword,
    signupInputphone,
    signupdropdown,
    signupError,
    signinInputName,
    signinInputPassword,
    signInHandler,
    signinError,
  } = props;
  const FlipClass = login && "flip";
  const RegTitleClass = register && "extregtitle";
  const LogTitleClass = login && "extlogtitle";

  return (
    <div className="loginRow">
      {/* <div className="col">
        <img
          src="https://www.wholesomeyum.com/wp-content/uploads/2019/09/wholesomeyum-keto-chaffles-recipe-sweet-savory-5-ways-24.jpg"
          alt="designImage"
        />
      </div> */}
      <div className="col loginCol">
        <div className="contentRow">
          <div className="content">
            <div className="regGrp">
              <h4
                className={`regtitle ${RegTitleClass}`}
                onClick={registerHandler}
              >
                REGISTER
              </h4>

              <h4
                className={`logtitle ${LogTitleClass}`}
                onClick={loginHandler}
              >
                LOGIN
              </h4>
            </div>

            <div className="flip-container">
              <div className={`flipper ${FlipClass} `} id="flipper">
                {register && (
                  <div className="register">
                    <div>
                      <label htmlFor="name">NAME</label>
                      <input onChange={signupInputName} type="text" id="name" />
                    </div>
                    <div>
                      <label htmlFor="email">EMAIL</label>
                      <input
                        onChange={signupInputEmail}
                        type="email"
                        id="email"
                      />
                    </div>
                    <div>
                      <label htmlFor="password">PASSWORD</label>
                      <input
                        onChange={signupInputPassword}
                        type="password"
                        id="password"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone">PHONE</label>
                      <input
                        onChange={signupInputphone}
                        type="number"
                        id="phone"
                      />
                    </div>
                    <select defaultValue="Choose" onChange={signupdropdown} className="dropdown">
                      <option disabled defaultValue="Choose">Choose</option>
                      <option>Employed</option>
                      <option>Non-Employed</option>
                    </select>
                    <small className="signupError">{signupError}</small>
                    <button onClick={signupHandler} className="regbutt">
                      SIGN UP
                    </button>
                  </div>
                )}

                {login && (
                  <div className="login">
                    <div>
                      <label htmlFor="name">NAME</label>
                      <input onChange={signinInputName} type="text" id="name" />
                    </div>
                    <div>
                      <label htmlFor="password">PASSWORD</label>
                      <input
                        onChange={signinInputPassword}
                        type="password"
                        id="password"
                      />
                    </div>
                    <small className="signinError">{signinError}</small>
                    <button onClick={signInHandler} className="logbutt">
                      SIGN IN
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
