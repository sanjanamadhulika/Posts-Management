import React, { useState } from "react";
import { Link } from "react-router-dom";

import PostsList from "./PostsList";

const SearchPosts = () => {
  const [title, setTitle] = useState('');
  const [tileToSearch, setTitleToSearch] = useState();

  const handleChange = (event) => {
    setTitle(event.target.value);
  }
  const handleClick = (event) => {
    setTitleToSearch(title)
  }
  return (
    <div>
      <div id="search">
        <h2>Search Title</h2>
        <input type="text" id="search-textbox" value={title} onChange={handleChange} />

        <button className="btn btn-primary btn-lg" onClick={handleClick}>
          Search
        </button>
      </div>

      <PostsList tileToSearch={tileToSearch} />
    </div>
  )
};

export default SearchPosts;
