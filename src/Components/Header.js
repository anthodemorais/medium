import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
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
                        <li>
                            <NavLink to={`/users/me`}>
                                Profile
                            </NavLink>
                        </li>
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