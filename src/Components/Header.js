import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import api from '../Services/api';

export default class Header extends Component {

    displayAuth() {
        if (!api.isLogged) {
            return (
                <div>
                    <li>
                        <NavLink to={`/register`}>
                            Register
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={`/login`}>
                            Login
                        </NavLink>
                    </li>
                </div>
                
            )
        }
        else {
            return (
                <li>
                    <NavLink to={`/users/me`}>
                        Profile
                    </NavLink>
                </li>
            )
        }
    }

    render() {
        return (
            <div>
                <header>
                    <h1>Medium</h1>
                    <ul>
                        <li>
                            <NavLink to={`/`}>
                                Home
                            </NavLink>
                        </li>
                        {this.displayAuth()}
                        <li>
                            <NavLink to={`/new/articles`}>
                                +
                            </NavLink>
                        </li>
                    </ul>
                </header>
            </div>
        )
    }
}