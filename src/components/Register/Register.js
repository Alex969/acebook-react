import './Register.css';
import React, { useState, useRef } from 'react';
import "./Modal.css";
import {useNavigate} from 'react-router-dom';

function Register(){
  const [modal, setModal] = useState(false);
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailSignUpRef = useRef();
  const passwordSignUpRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();
 
  const toggleModal = () => {
    setModal(!modal)
  }

  const handleLogIn = (event) => {
    const email = emailRef.current.value
    const password = passwordRef.current.value

    const data = { "session": {"email": email, "password": password }};

    fetch('https://acebook-api.herokuapp.com/login', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    }).then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      navigate('/home')
    })
    .catch((error) => {
      console.error('Error:', error);
    });

    // alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  } 
    const handleSignUp = (event) => {
      const firstName = firstNameRef.current.value
      const lastName = lastNameRef.current.value
      const emailSignUp = emailSignUpRef.current.value
      const passwordSignUp = passwordSignUpRef.current.value

      const data = {"user": {"first_name": firstName, "last_name": lastName, "email": emailSignUp, "password": passwordSignUp}};

      fetch('https://acebook-api.herokuapp.com/users', {
      method: 'POST',
      credentials: 'include', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      }).then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        navigate('/home')
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  
      // alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
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
          <form onSubmit={handleLogIn}>
            <input type="email" ref={emailRef} placeholder="Email address"/>
            <br></br>
            <input type="password" ref={passwordRef} placeholder="Password"/>
            <input className="btn" type="submit" value="Log in"/>
          </form>
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
              <form onSubmit={handleSignUp}>
                <div className="input">
                  <input type="firstName" ref={firstNameRef} placeholder="First Name"/>
                  <input type="lastName" ref={lastNameRef} placeholder="Last Name"/>
                  <input type="emailSignUp" ref={emailSignUpRef} placeholder="Email address"/>
                  <input type="passwordSignUp" ref={passwordSignUpRef} placeholder="Create a new password"/>
                </div>
                <div className="disclaimer">
                  By clicking Sign Up, you agree to our Terms. 
                  Learn how we collect, use and share your data in our Data Policy 
                  and how we use cookies and similar technology in our Cookie Policy. 
                  You may receive SMS notifications from us and can opt out at any time.
                </div>
                <input className="btn-sign-up" type="submit" value="Sign Up"/>
              </form>
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