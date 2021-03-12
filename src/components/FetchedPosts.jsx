import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Post from './Post'
import { fetchPosts } from '../redux/actions'

export default function FetchedPosts() {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.fetchedPosts)
    const app = useSelector(state => state.app.loading)

    if (app) {
        return (
            <div className="spinner-border text-secondary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        )
    } 

    if (!posts.length) return <button className="btn btn-primary" onClick={() => dispatch(fetchPosts())}>Загрузить</button>
  
    return posts.map(post => <Post title={post.title} key={post.id} />)
}