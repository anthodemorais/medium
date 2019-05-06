import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import api from '../Services/api';

export default class AddArticle extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: "",
            content: "",
            category: 0,
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
        
        api.addArticle(title, content, parseInt(category)).then((result) => {
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
                    <label>
                        Pick your category:
                        <select value={this.state.category} onChange={(e) => {this.changeCategory(e)}}>
                            <option value={1}>Développement</option>
                            <option value={2}>Marketing</option>
                            <option value={3}>Design</option>
                            <option value={4}>Jeux vidéo</option>
                            <option value={5}>Sport</option>
                            <option value={6}>Musique</option>
                            <option value={7}>Autre</option>
                        </select>
                    </label>
                    <button>Publier</button>
                </form> 
            </div>
        )
    }
}