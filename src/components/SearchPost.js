import React, { useState, useEffect } from "react";
import HomePage from "./Homepage";
import axios from "axios";
import { Link } from 'react-router-dom';

function SearchPost() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchID, setSearchID] = useState("");

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data);
      setLoading(false);
    };

    loadPosts();
  }, []);

  return (
    <div className="App">
      <h3>Search Filter</h3>
      <input
        style={{ width: "30%", height: "25px" }}
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchTitle(e.target.value)}
      />

      <Link activeClassname='active' className="link1" to={"/"}>BackHome</Link>
      <div>
        <table>
          <thead>
            <tr>
              <th>UserID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <h4>Loading ...</h4>
            ) : (
              posts
                .filter((value) => {
                  if (searchTitle === "") {
                    return value;
                  } else if (
                    value.title.toLowerCase().includes(searchTitle.toLowerCase())
                  ) {
                    return value;
                  } else if (value.id === searchID) {
                    return value;
                  }
                })
                .map((item) => <tr>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.body}</td>
                </tr>
                ))}</tbody></table></div>
    </div>
  );
}

export default SearchPost;