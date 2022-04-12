import React from 'react';
import Homepage from './Homepage';
import { Link } from 'react-router-dom';

export default function SuccessResponse() {
    return (
        <div>
            <h1>Post updated successfully and a 200 Response is received</h1>

            <div>
                <Link activeClassname='active' className="link1" to={"/"}>Home</Link>
            </div>
        </div>
    );
}