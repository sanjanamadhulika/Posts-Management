import React from 'react'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

const PostsList = (props) => {
    const posts = useSelector(state => state.actualPosts)
    const filteredPost = posts.filter(post => post.title.includes(props.tileToSearch))

    const renderedPosts = filteredPost.length !== 0 ? filteredPost.map(post => (
        <article key={post.id} className="post-details" data-testid="post-lists">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <Link to={"edit/" + post.id}>Edit</Link>
        </article>
    )) : props.tileToSearch !== undefined ? <p className="not-found">Title not found</p> : ''

    return (
        <section>
            {renderedPosts}
        </section>
    )
}

export default PostsList;