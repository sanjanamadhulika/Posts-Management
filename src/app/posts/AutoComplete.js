import React from 'react';
import { useSelector } from 'react-redux'

function AutoComplete(props) {
    const posts = useSelector(state => state.actualPosts)
    const filteredPosts = (props.title !== "" && props.title !== " ") ? posts.filter(post => post.title.includes(props.title)) : []
    const autoComplete = filteredPosts.map(post =>
        <option key={post.id} value={post.title} data-testid="auto-complete" />
    )
    return (
        <React.Fragment>
            <datalist id={props.id}>
                {autoComplete}
            </datalist>
        </React.Fragment>
    );
}

export default AutoComplete;


