import React, { Component } from 'react';
import api from '../Services/api';
import ArticlePreview from './ArticlePreview';
import Header from '../Components/Header';

export default class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            articles: []
        }

        api.getArticles().then((data) => {
            this.setState({
                articles: data
            })
        })
    }

    displayArticles() {

        let articles = []

        for (var i in this.state.articles.reverse()) {
             (
                articles.push(<ArticlePreview
                    title={this.state.articles[i].title}
                    content={this.state.articles[i].content}
                    author={this.state.articles[i].User.firstname + " " + this.state.articles[i].User.lastname}
                    id={this.state.articles[i].id}
                    />
                )
            )
        }

        return articles
    }

    render() {
        return (
            <div>
                <Header/>
                <div className="articles">
                    <h1>Derniers Articles</h1>
                    {this.displayArticles()}
                </div>
            </div>
        );
    }
}