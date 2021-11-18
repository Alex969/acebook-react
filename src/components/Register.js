import '../Register.css';
import { Navigate } from 'react-router-dom';
import React, { useState } from 'react';
import "../Modal.css";

function Register(){
  const [modal, setModal] = useState(false);

   const toggleModal = () => {
    setModal(!modal)
  }

  // const constructor = (props) => {
  //   super(props);
  //   this.state = {value: ''};

  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  // const handleChange = (event) => {
  //   this.setState({value: event.target.value});
  // }

  const handleLogIn = (event) => {
    const data = { "session": {"email": "j@j.com", "password": "banana" }};

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
      <Navigate to="/"/>
    })
    .catch((error) => {
      console.error('Error:', error);
    });

    // alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  /* Signup
  curl -X POST -H "Content-Type: application/json" \
    -d '{"user": {"first_name": "Curl", "last_name": "Request", "email": "curl@example.com", "password": "curl"} }' \
    https://acebook-api.herokuapp.com/users

    succesful: return a user object as json
  */
  
    const handleSignUp = (event) => {
      const data = {"user": {"first_name": "Curl", "last_name": "Request", "email": "curl@example.com", "password": "curl"}};
  
      fetch('https://acebook-api.herokuapp.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      }).then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        <Navigate to="/"/>
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
            <input type="email" placeholder="Email address"/>
            <br></br>
            <input type="password" placeholder="Password"/>
            <input className="btn" type="submit" value="Log in" />
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