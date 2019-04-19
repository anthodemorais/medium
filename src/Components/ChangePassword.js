import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import api from '../Services/api';

export default class ChangePassword extends Component {

    constructor(props) {
        super(props)
        this.state = {
            old: "",
            newPwd: "",
            verif: "",
            redirect: false
        }
    }

    passwordChange(e) {
        this.setState({
            old: e.target.value
        })
    }

    passwordNewChange(e) {
        this.setState({
            newPwd: e.target.value
        })
    }

    passwordVerifChange(e) {
        this.setState({
            verif: e.target.value
        })
    }

    submit(e) {
        e.preventDefault();

        var old = this.state.old;
        var newPwd = this.state.newPwd;
        var verif = this.state.verif;

        api.updateUser(old, newPwd, verif).then((result) => {
            this.setState({
                redirect: true
            })
        })
    }

    render() {

        if (this.state.redirect === true) {
            return <Redirect to='/users/me' />
        }

        return (
            <form onSubmit={(e) => {this.submit(e)}}>
                <input type="password" placeholder="password" onChange={(e) => {this.passwordChange(e)}} required />
                <input type="password" placeholder="new password" onChange={(e) => {this.passwordNewChange(e)}} required />
                <input type="password" placeholder="password verification" onChange={(e) => {this.passwordVerifChange(e)}} required />
                <button type="submit">Update</button>
            </form>
        )
    }
}