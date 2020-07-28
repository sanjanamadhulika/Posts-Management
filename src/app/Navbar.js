import React from "react";
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <section>
        <h1 style={{ textAlign: "center" }}>Posts Management</h1>

        <div className="navContent">
          <div className="navLinks">
            <Link to="/">Search Posts</Link>
            <Link to="/edit">Edit Post</Link>
          </div>
        </div>
      </section>
    </nav>
  );
};
export default Navbar;