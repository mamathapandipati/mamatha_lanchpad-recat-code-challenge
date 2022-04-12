import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SuccesResponse from "./SuccessResponse";

class AddPost extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }

    submitHandler = (e) => {
        e.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
            .then(response => {
                console.log(response)
                this.state = {
                    userId: '',
                    title: '',
                    body: ''
                }
                if (response.state == 200) {
                    alert("Succuessfully Created")
                }
            }).catch(e => {
                console.log("e", e)
            })
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { userId, title, body } = this.state
        return (
            <div class='form'>
                <h1>Add Post</h1>
                <form onSubmit={this.submitHandler}>
                    <div class='form'>
                        <div class="inputfield">
                            UserId  :  <input
                                type='text'
                                name='Id'
                                onChange={(e) => this.changeHandler(e)}
                                value={this.state.userId}></input><br></br>
                        </div >
                        <div>
                            Title :   <input
                                type='text'
                                name='title'
                                onChange={(e) => this.changeHandler(e)}
                                value={this.state.title}></input><br></br>
                        </div>
                        <div>
                            Body :  <input
                                type='text'
                                name='body'
                                onChange={(e) => this.changeHandler(e)}
                                value={this.state.body}></input>
                        </div>
                        <div>
                            <Link to='/succesResponse'>
                                <button type="submit" onClick={this.submitHandler}
                                    class="button">
                                    Submit
                                </button>
                            </Link>

                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddPost;