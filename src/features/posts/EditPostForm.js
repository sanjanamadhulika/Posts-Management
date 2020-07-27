import React, { useState } from "react";
import { useSelector } from 'react-redux'

const EditPostForm = (props) => {
    const postId = props.match.params.postId;
    const post = useSelector(state =>
        state.posts.actualPosts.find(post => post.id == postId)
    )

    const [title, setTitle] = useState(post ? post.title : "")
    const [body, setBody] = useState(post ? post.body : "")

    const onTitleChanged = e => setTitle(e.target.value)
    const onBodyChanged = e => setBody(e.target.value)

    return (
        <section className="editForm">
            <h2>Edit Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}

                />
                <label htmlFor="postBody">Content:</label>
                <textarea
                    id="postBody"
                    name="postBody"
                    value={body}


                />
            </form>
            <button type="button" className="btn btn-primary btn-lg">
                Save Post
          </button>
        </section>
    )
}

export default EditPostForm;
