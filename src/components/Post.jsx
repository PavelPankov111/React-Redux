import React from 'react'

export default function Post(props) {
    return (
        <div className="card">
            <div className="card-body">
                <h2 className="card-title">{props.title}</h2>
            </div>
        </div>
    )
}