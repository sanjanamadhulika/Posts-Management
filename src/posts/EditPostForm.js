import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button';

import { postUpdated } from './postsSlice'

const EditPostForm = (props) => {
    const posts = useSelector(state => state.posts)
    const postId = props.match.params.postId;

    const post = posts.actualPosts.find(post => post.id == postId)

    const [title, setTitle] = useState(post ? post.title : "")
    const [body, setBody] = useState(post ? post.body : "")

    const onTitleChanged = e => setTitle(e.target.value)
    const onBodyChanged = e => setBody(e.target.value)

    const dispatch = useDispatch()
    const history = useHistory()

    const onSavePostClicked = () => {
        if (title && body) {
            dispatch(postUpdated({ id: postId, title, body }))
            history.push(`/`)
        }
    }

    const filteredPosts = posts.actualPosts.filter(post => post.title.includes(title))
    const autoComplete = filteredPosts.map(post =>
        <option value={post.title} />
    )

    const onGetBodyClicked = () => {
        const filteredPost = posts.actualPosts.find(post => post.title == title)
        setBody(filteredPost.body)
    }

    return (
        <section className="editForm">
            <h2>Edit Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    list="search_suggest"
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />
                <datalist id="search_suggest">
                    {autoComplete}
                </datalist>
                <Button variant="contained" color="primary" size="small" style={{ margin: "0 10px" }} onClick={onGetBodyClicked}>
                    Get Body
                </Button>
                <label htmlFor="postBody">Post Body:</label>
                <textarea
                    id="postBody"
                    name="postBody"
                    value={body}
                    onChange={onBodyChanged}
                />
            </form>
            <Button variant="contained" color="primary" size="large" onClick={onSavePostClicked}>
                Save Post
            </Button>
        </section>
    )
}

export default EditPostForm;
