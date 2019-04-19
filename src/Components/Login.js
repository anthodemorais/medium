import React, { Component } from 'react';
import { BrowserRouter as Redirect} from 'react-router-dom';
import api from '../Services/api';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    submit(e) {
        e.preventDefault();

        var email = this.state.email;
        var password = this.state.password;

        api.getToken(email, password).then((token) => {
            localStorage.setItem("token", token)
            return (<Redirect to="/users/me"/>)
        });
    }

    emailChange(e) {
        this.setState({
            email: e.target.value
        })
    }

    passwordChange(e) {
        this.setState({
            password: e.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <form
                    method="POST"
                    onSubmit={(e) => {this.submit(e)}}
                >
                    <input type="email" placeholder="email" onChange={(e) => {this.emailChange(e)}} required />
                    <input type="password" placeholder="password" onChange={(e) => {this.passwordChange(e)}} required />
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}