import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../Constants/Routes';
 
const SignUpPage = () => (
  <div>
    <h1>SignUp</h1>
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  PasswordTwo: '',
  error: null,
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);
  
    this.state = { ...INITIAL_STATE};
  }

  onSubmit = event => {
    const {username, email, passwordOne} = this.state;

    this.props.firebase
    .doCreateUserWithEmailAndPassword(email, passwordOne)
    .then (authUser => {
      this.setState({ ...INITIAL_STATE});
      this.props.history.push(ROUTES.HOME);
    })
    .cath(error => {
      this.setState({ error});
    });
    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value});
  };

render() {
  const {
    username,
    email,
    passwordOne,
    PasswordTwo,
    error,
  } = this.state;

  const isInvalid =
  passwordOne !== '' ||
  passwordOne  === '' ||
  email === '' ||
  username === '';

  return (
    <form onSubmit={this.onSubmit}>
      <input
      name="username"
      value={username}
      onChange={this.onChange}
      type="text"
      placeholder="Full Name"
      />
        <input
        name="email"
        value={email}
        onChange={this.onChange}
        type="text"
        placeholder="Email Adress"
        />
        <input
        name="passwordOne"
        value={passwordOne}
        onChange={this.onChange}
        type="text"
        placeholder="Password"
         />
         <input
         name="passwordtwo"
         value={PasswordTwo}
         onChange={this.onChange}
         type="text"
         placeholder="Confirm Password"
         />
         <button disabled={isInvalid} type="submit">
           Sign Up
         </button>

         {error && <p>{error.message}</p>}
    </form>
  );
}
}

const SignUpLink = () => (
  <p>
    Don't have an account? <link to={ROUTES.SIGN_UP}>Sign Up</link>
  </p>
);

const SignUpForm = compose(withRouter, withFirebase,)(SignUpFormBase);

export default SignUpPage;
export {SignUpForm, SignUpLink};