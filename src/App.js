import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Navbar from "./app/Navbar";

import SearchPosts from "./app/posts/SearchPosts";
import EditPostForm from "./app/posts/EditPostForm"

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route exact path="/" component={SearchPosts} />
          <Route exact path="/edit" component={EditPostForm} />
          <Route exact path="/edit/:postId" component={EditPostForm} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
