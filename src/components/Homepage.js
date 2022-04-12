import axios from "axios";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import AddPost from './AddPost';
import { NavLink } from "react-bootstrap";
import UpdatePost from "./UpdatePost";
import { Link } from "react-router-dom";

const Homepage = (props) => {
  const [posts, setPosts] = useState([]);
  const apiEndPoint = "https://jsonplaceholder.typicode.com/posts? _start=0&_limit=20";
  useEffect(() => {
    const getPosts = async () => {
      const { data: res } = await axios.get(apiEndPoint);
      setPosts(res);
    };
    getPosts();
  }, []);

  const setUpdate = (id, title, body) => {
    localStorage.setItem('ID', id)
    localStorage.setItem('title', title)
    localStorage.setItem('body', body)
  }
  const handleDelete = async (post) => {
    await axios.delete('https://jsonplaceholder.typicode.com/posts/${post.id}');
    setPosts(posts.filter((p) => p.id !== post.id));
  };


  if (posts.length === 0) return <h2> There are no posts in the Database </h2>;
  return (
    <>
      <div className="container">
        <h2> There are {posts.length} posts in the Database </h2>
        <Link activeClassname='active' className="link1" to={"/AddPost"}>Add Post</Link>
        <Link activeClassname='active' className="link1" to={"/Searchpost"}>Search Post</Link>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr>
                <td>{post.id} </td>
                <td> {post.title} </td>
                <td>
                  <Link to='/updatepost'>
                    <button
                      onClick={() => setUpdate(post.id, post.title, post.body)}
                      className="btn btn-primary btn-sm">
                      Edit
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(post)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Homepage;