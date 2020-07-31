import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button';

import { postUpdated } from '../../redux/postActions'
import AutoComplete from './AutoComplete'

const EditPostForm = (props) => {
    const posts = useSelector(state => state.actualPosts)
    const postId = props.match.params.postId;

    const post = posts.find(post => post.id === parseInt(postId))

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

    const onGetBodyClicked = () => {
        const filteredPost = posts.find(post => post.title === title)
        if (filteredPost) {
            setBody(filteredPost.body)
        } else {
            setBody("")
        }
    }

    return (
        <section className="editForm">
            <h2>You can Edit Post here</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    list="edit_suggest"
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    placeholder="Enter Title"
                    value={title}
                    onChange={onTitleChanged}
                />
                <AutoComplete title={title} id="edit_suggest" />

                <Button variant="contained" size="small" data-testid="get-body-button" style={{ margin: "0 10px" }} onClick={onGetBodyClicked}>
                    Get Body
                </Button>

                <label htmlFor="postBody">Post Body:</label>
                <textarea
                    id="postBody"
                    name="postBody"
                    data-testid="postBody"
                    value={body}
                    onChange={onBodyChanged}
                />
            </form>
            <Button variant="contained" data-testid="save-post-button" size="large" onClick={onSavePostClicked}>
                Save Post
            </Button>
        </section>
    )
}

export default EditPostForm;
