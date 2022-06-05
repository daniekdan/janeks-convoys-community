import React, { Component, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { signInWithEmailAndPassword } from "firebase/auth";
import { HashLink } from 'react-router-hash-link';
import { auth } from '../firebase-config';
import { Redirect } from "react-router-dom";


function Loguj() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleSubmit = (event) => {
  event.preventDefault();
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    //this.setState({ redirect: "/janeks-convoys-community/dashboard" });
    window.location.replace('/dashboard');
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorCode, errorMessage);
    document.querySelector('#messagebox').style.display = 'flex';
    document.body.style.overflow = 'hidden';
  });
}

  return (
    <div className='login-form' id='login_form'>
        <form onSubmit={handleSubmit}>
          <div>
            <HashLink to="/"><FontAwesomeIcon icon={faXmark} className='icon'/></HashLink>
          </div>
            <span>Dashboard login</span><br />
            <span name="messagebox" id='messagebox'>Wrong email and/or password</span><br />
            <input type="email" placeholder='E-mail address' required onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder='Password' required onChange={(e) => setPassword(e.target.value)}/>
            <input type="submit" value="Login" />
        </form>
    </div>
  )
}
export default class LoginForm extends Component {
  state = { redirect: null };
  render() {
    if (this.state.redirect != null) {
      return <Redirect to={this.state.redirect} />
    }
    return (
      <Loguj />
    )
  }
}
