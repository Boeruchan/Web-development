import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "./Base";

const SignUp = ({ history }) => {
    const handleSignup = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await app.auth()
            .createUserWithEmailAndPassword(email.value, password.value);
            history.push("/");
        } catch (error) {
            alert(error);
        }
        }, {history});

        return (
            <div>
                <h1>Sign up</h1>
                <form onSubmit={handleSignup}>
                    <label>
                        Email
                        <input name="email" type="email" placeholder="Email" />
                    </label>
                    <label>
                    Password
                        <input name="password" type="password" placeholder="Password" />
                    </label>
                    <button type="submit">Signup</button>
                </form>
            </div>
        );
};

export default withRouter(SignUp);