import React, { useState } from "react";
import { useSelector } from 'react-redux'
import Button from '@material-ui/core/Button';

import PostsList from "./PostsList";

const SearchPosts = () => {
  const [title, setTitle] = useState('');
  const [tileToSearch, setTitleToSearch] = useState();

  const handleChange = (event) => {
    setTitle(event.target.value);
  }

  const posts = useSelector(state => state.actualPosts)
  const filteredPosts = (title !== "" && title !== " ") ? posts.filter(post => post.title.includes(title)) : []
  const autoComplete = filteredPosts.map(post =>
    <option value={post.title} />
  )

  const handleClick = () => {
    setTitleToSearch(title)
  }

  return (
    <div>
      <div id="search">
        <h2>Search Title</h2>
        <input list="search_suggest" type="text" id="search-textbox" placeholder="Search Title" value={title} onChange={handleChange} />
        <datalist id="search_suggest">
          {autoComplete}
        </datalist>

        <Button variant="contained" size="large" data-testid="search-button" onClick={handleClick}>
          Search
        </Button>
      </div>

      <PostsList tileToSearch={tileToSearch} />
    </div>
  )
};

export default SearchPosts;
