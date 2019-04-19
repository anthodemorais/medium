import React, { Component } from 'react';
import { BrowserRouter as Redirect} from 'react-router-dom';
import api from '../Services/api';

export default class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            password_verif: ""
        }
    }

    submit(e) {
        e.preventDefault();

        var firstname = this.state.firstname;
        var lastname = this.state.lastname;
        var email = this.state.email;
        var password = this.state.password;
        var password_verif = this.state.password_verif;

        api.SignUp(firstname, lastname, email, password, password_verif).then((result) => {
            if (result.status >= 200 && result.status <= 300)
            {
                api.getToken(email, password).then((token) => {
                    localStorage.setItem("token", token)
                    return (<Redirect to="/users/me"/>)
                })
            }
        })
    }

    firstnameChange(e) {
        this.setState({
            firstname: e.target.value
        })
    }

    lastnameChange(e) {
        this.setState({
            lastname: e.target.value
        })
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

    passwordVerifChange(e) {
        this.setState({
            password_verif: e.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>Register</h1>
                <form
                    method="POST"
                    onSubmit={(e) => {this.submit(e)}}
                >
                    <input type="text" placeholder="firstname" onChange={(e) => {this.firstnameChange(e)}} required />
                    <input type="text" placeholder="lastname" onChange={(e) => {this.lastnameChange(e)}} required />
                    <input type="email" placeholder="email" onChange={(e) => {this.emailChange(e)}} required />
                    <input type="password" placeholder="password" onChange={(e) => {this.passwordChange(e)}} required />
                    <input type="password" placeholder="password verification" onChange={(e) => {this.passwordVerifChange(e)}} required />
                    <button type="submit">Register</button>
                </form>
            </div>
        )
    }
}