import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Login.css'


const Login = (props: { setLoggedIn: (arg0: boolean) => void; setEmail: (arg0: string) => void;}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(true);
    
    const navigate = useNavigate();

    const onRegisterClick = () => {
        // Redirect to the /register route
        navigate("/register");
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const onButtonClick = () => {
        const onButtonClick = () => {
            // Set initial error values to empty
            setEmailError("");
            setPasswordError("");
        
            // Check if the user has entered both fields correctly
            if ("" === email) {
                setEmailError("Please enter your email");
                return;
            }
        
            if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
                setEmailError("Please enter a valid email");
                return;
            }
        
            if ("" === password) {
                setPasswordError("Please enter a password");
                return;
            }
        
            if (password.length < 8) {
                setPasswordError("The password must be 8 characters or longer");
                return;
            }
        
            // Authentication calls will be made here...
            // For demonstration purposes, let's assume authentication is successful
            // In a real-world scenario, you would make API calls to authenticate the user
            // and handle success/failure accordingly.
        
            // Assuming authentication is successful, update the loggedIn state and navigate to the Home page
            props.setLoggedIn(true);
            props.setEmail(email);
        
            // Redirect to the Home page
            navigate("/");
        };
        
    }
    
    return (
        <div>
          {isModalOpen && (
            <div className="overlay" onClick={closeModal}>
              {/* Modal Content */}
              <div className="modal" onClick={(e) => e.stopPropagation()}>
                <div className={"mainContainer"}>
                  <div className={"inputContainer"}>
                    <input
                      value={email}
                      placeholder="username"
                      onChange={(ev) => setEmail(ev.target.value)}
                      className={"inputBox"}
                    />
                    <label className="errorLabel">{emailError}</label>
                  </div>
                  <br />
                  <div className={"inputContainer"}>
                    <input
                      value={password}
                      placeholder="password"
                      onChange={(ev) => setPassword(ev.target.value)}
                      className={"inputBox"}
                    />
                    <label className="errorLabel">{passwordError}</label>
                  </div>
                  <br />
                  <div className={"inputContainer"}>
                    <input
                      className={"inputButton"}
                      type="button"
                      onClick={onButtonClick}
                      value={"Log in"}
                    />
                  </div>
                  <br />
                  <div className={"inputContainer"}>
                    <input
                      className={"inputButton"}
                      type="button"
                      onClick={onRegisterClick}
                      value={"Register"}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      );
}

export default Login;
