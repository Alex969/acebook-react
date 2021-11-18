import './Register.css';
import React, { useState } from 'react';
import "./Modal.css";

function Register(){
  const [modal, setModal] = useState(false);

   const toggleModal = () => {
    setModal(!modal)
  }

  return(
    <div className="Login">
      <div className="acebook">
      <div className="acebooktext">
        acebook
      </div>
      <div className="title">
        Acebook helps you connect and share
        <br></br>with the people in your life. 
      </div>
      </div>
      <div className="LogInContainer">
        <div className="logindetail">
          <form>
            <input type="email" placeholder="Email address"/>
            <br></br>
            <input type="password" placeholder="Password"/> 
          </form>
        </div>
        <div className="btn">
          Log In
        </div>
        <div className="lineBreak">
        </div>
        <div className="create">
        <br></br>
        <button onClick={toggleModal} 
        className="btns">
          Create New Account
        </button>
        {modal && (
        <div className="modal">
          <div className="overlay"
          onClick={toggleModal}>
        </div>
            <div className="modal-content">
              <div className="sign-up">Sign Up</div>
              <div className="itWontTakeLong">It won't take long!</div>
              <div className="modalLineBreak">
              </div>
              <div className="input">
              <input type="firstName" placeholder="First Name"/>
              <input type="lastName" placeholder="Last Name"/>
              <input type="emailSignUp" placeholder="Email address"/>
              <input type="passwordSignUp" placeholder="Create a new password"/>
              </div>
              <div className="disclaimer">
              By clicking Sign Up, you agree to our Terms. 
              Learn how we collect, use and share your data in our Data Policy 
              and how we use cookies and similar technology in our Cookie Policy. 
              You may receive SMS notifications from us and can opt out at any time.
              </div>
              <button className="btn-sign-up">
                  Sign Up
              </button>
            <button
            className="close-modal"
            onClick={toggleModal}
            >&#215;</button>
            </div>
        </div>

    )}
      </div>
      <p></p>
      <br></br>
      </div>
    </div>
  )
}

export default Register