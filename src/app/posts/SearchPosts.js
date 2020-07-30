import React, { useState } from "react";
import Button from '@material-ui/core/Button';

import PostsList from "./PostsList";
import AutoComplete from './AutoComplete'

const SearchPosts = () => {
  const [title, setTitle] = useState('');
  const [tileToSearch, setTitleToSearch] = useState();

  const handleChange = (event) => {
    setTitle(event.target.value);
  }

  const handleClick = () => {
    setTitleToSearch(title)
  }

  return (
    <div>
      <div id="search">
        <h2>Search Title</h2>
        <input list="search_suggest" type="text" id="search-textbox" placeholder="Search Title" value={title} onChange={handleChange} />
        <AutoComplete title={title} id="search_suggest" />

        <Button variant="contained" size="large" data-testid="search-button" onClick={handleClick}>
          Search
        </Button>
      </div>

      <PostsList tileToSearch={tileToSearch} />
    </div>
  )
};

export default SearchPosts;
