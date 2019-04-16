import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class ArticlePreview extends Component {

    render() {
        return (
            <div className="article">
                <h2>{this.props.title}</h2>
                <span>By {this.props.author}</span>
                <p>{this.props.content}</p>
                <button>
                    <NavLink
                        to={`/articles/${this.props.id}`}
                        className="readMore"
                    >
                        Read More
                    </NavLink>
                </button>
            </div>
        )
    }
}