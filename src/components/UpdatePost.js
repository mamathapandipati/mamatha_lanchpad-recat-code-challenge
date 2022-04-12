import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import Homepage from './Homepage';
import { Link } from 'react-router-dom';

export default function UpdatePost(props) {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [ID, setID] = useState('');

    const sendDataToAPI = () => {
        axios.put(`https://jsonplaceholder.typicode.com/posts/${ID}`, {
            title,
            body
        }).then(() => {
        })
    }

    useEffect(() => {
        setTitle(localStorage.getItem('title'));
        setBody(localStorage.getItem('body'));
        setID(localStorage.getItem('ID'))

    }, [])

    return (
        <div class='form'>
            <h1>Update Post</h1>
            <form>
                <div >
                    ID  :  <input name="id" type='text'
                        value={ID}
                        onChange={(e) => setID(e.target.value)}
                        placeholder='UserId' />
                </div>
                <div>
                    Title  :   <input name="title" type='text'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder='Title' />
                </div>
                <div>
                    Body  :   <input type='text'
                        name="body"
                        value={body}
                        placeholder='Body'
                        onChange={(e) => setBody(e.target.value)}
                    /></div>
                <Link to='/SuccessResponse'>
                    <button type="submit"
                        onClick={sendDataToAPI}
                        color="green">
                        Update
                    </button>
                </Link>
            </form>
        </div>
    )
}
