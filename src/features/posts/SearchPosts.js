import React from "react";
import { Link } from "react-router-dom";

const SearchPosts = () => (
  <div id="search">
    <h2>Search Title</h2>
    <input type="text" id="search-textbox" />
    <Link to="edit" className="btn btn-primary btn-lg">
      Search
    </Link>
  </div>
);

export default SearchPosts;
