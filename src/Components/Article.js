import React, { Component } from 'react';
import api from '../Services/api';
import Header from '../Components/Header';

export default class Article extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            loaded: false,
            article: {},
            author: "",
            title: "",
            content: "",
            created_at: "",
            updated_at: "",
            category: ""
        }

        this.displayReadMore()
    }

    displayReadMore() {

        if (!this.state.loaded)
        {
            this.setState({
                loaded: true
            });

            if (this.props.match.params.id)
            {
                api.getArticle(parseInt(this.props.match.params.id)).then((article) => {
                    this.setState({
                        article: article,
                        author: article.User.firstname + " " + article.User.lastname,
                        title: article.title,
                        content: article.content,
                        created_at: article.created_at.substring(0, 10).split("-").reverse().join("/"),
                        updated_at: article.updated_at.substring(0, 10).split("-").reverse().join("/"),
                        category: article.ArticleCategory.name
                    })
                })
            }
        }
    }

    render() {
        return (
            <div>
                <Header/>
                <div>
                    <h2>{this.state.title}</h2>
                    <span>By {this.state.author}</span>
                    <p>{this.state.content}</p>
                    <span>{"Category " + this.state.category}</span>
                    <br/>
                    <span>{"Created at " + this.state.created_at}</span>
                    <br/>
                    <span>{"Updated at " + this.state.updated_at}</span>
                </div>
            </div>
        )
    }
}