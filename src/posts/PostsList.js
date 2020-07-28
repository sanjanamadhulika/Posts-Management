import React from 'react'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'

const PostsList = (props) => {
    const posts = useSelector(state => state.posts)
    const filteredPost = posts.actualPosts.filter(post => post.title.includes(props.tileToSearch))

    const renderedPosts = filteredPost.map(post => (
        <article id={post.id} className="post-details">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <Link to={"edit/" + post.id}>Edit</Link>
        </article>
    ))

    return (
        <section>
            {renderedPosts}
        </section>
    )
}

export default PostsList;