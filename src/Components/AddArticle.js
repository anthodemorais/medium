import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import api from '../Services/api';

export default class AddArticle extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: "",
            content: "",
            category: "",
            redirect: false
        }
    }

    changeTitle(e) {
        this.setState({
            title: e.target.value
        })
    }

    changeContent(e) {
        this.setState({
            content: e.target.value
        })
    }

    changeCategory(e) {
        this.setState({
            category: e.target.value
        })
    }

    submit(e) {
        e.preventDefault();

        var title = this.state.title,
            content = this.state.content,
            category = this.state.category;

        console.log(category)
        
        api.addArticle(title, content, category).then((result) => {
            this.setState({
                redirect: true
            })
        })
    }

    render() {

        if (this.state.redirect === true) {
            return <Redirect to='/' />
        }

        return (
            <div>
                <h2>Ajouter un article</h2>
                <form onSubmit={(e) => {this.submit(e)}} >
                    <input type="text" placeholder="title" onChange={(e) => {this.changeTitle(e)}} />
                    <textarea placeholder="content.." onChange={(e) => {this.changeContent(e)}} ></textarea>
                    <input type="text" placeholder="category" onChange={(e) => {this.changeCategory(e)}} />
                    <button>Publier</button>
                </form> 
            </div>
        )
    }
}