import React, { Component } from 'react';
import { BrowserRouter as Redirect} from 'react-router-dom';
import api from '../Services/api';
import logo from '../logo.svg';
import Header from './Header';
import ChangePassword from './ChangePassword';

export default class User extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: [],
            picture: "",
            firstname: "",
            lastname: "",
            birthdate: ""
        }

        api.getUserInfos().then((data) => {
            this.setState({
                user: data,
                firstname: data.firstname,
                lastname: data.lastname,
                birthdate: data.birthdate
            })

            if (this.state.user.picture === "default.png")
            {
                this.setState({
                    picture: logo
                })
            }
        })
    }

    changeFirstname(e) {
        this.setState({
            firstname: e.target.value
        })
    }

    changeLastname(e) {
        this.setState({
            lastname: e.target.value
        })
    }

    changeDate(e) {
        this.setState({
            birthdate: e.target.value
        })
    }

    submit(e) {
        e.preventDefault();

        var firstname = this.state.firstname;
        var lastname = this.state.lastname;
        var birthdate = this.state.birthdate;

        api.updateUser(firstname, lastname, birthdate).then((result) => {
            return (<Redirect to="/users/me"/>)
        })
    }

    render() {
        return (
            <div>
                <Header/>
                <div>
                    <img src={logo} alt={this.state.firstname + " " + this.state.lastname}/>
                    <h2>{this.state.firstname + " " + this.state.lastname}</h2>
                    <span>{this.state.birthdate.substring(0, 10).split("-").reverse().join("/")}</span>
                </div>
                <div>
                    <form onSubmit={(e) => {this.submit(e)}}>
                        <input type="text" placeholder="firstname" onChange={(e) => {this.changeFirstname(e)}} value={this.state.firstname} required />
                        <input type="text" placeholder="lastname" onChange={(e) => {this.changeLastname(e)}} value={this.state.lastname} required />
                        <input type="date" onChange={(e) => {this.changeDate(e)}} value={this.state.birthdate} required/>
                        <button type="submit">Update</button>
                    </form>
                </div>
                <div>
                    <ChangePassword/>
                </div>
            </div>
        )
    }
}