import React from 'react'
import Post from './Post'
import { connect } from 'react-redux'

const Posts = ({ syncPosts }) => {
    if (!syncPosts.length) return <p>Постов пока нет</p>
    return syncPosts.map(post => <Post title={post.title} key={post.key}/>)    
}

const mapStateToProps = state => {
    return {
        syncPosts: state.posts.posts
    }
}

export default connect(
    mapStateToProps,
    null,
)(Posts)