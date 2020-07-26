import React from "react";
import { useDispatch, useSelector } from 'react-redux'

const EditPostForm = (props) => {
    const postId = props.match.params.postId;

    return (
        <section className="editForm">
            <h2>Edit Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    placeholder="What's on your mind?"


                />
                <label htmlFor="postContent">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"


                />
            </form>
            <button type="button" className="btn btn-primary btn-lg">
                Save Post
          </button>
        </section>
    )
}

export default EditPostForm;
