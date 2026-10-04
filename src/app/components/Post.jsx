import React from 'react';

const Post = ({post}) => {
    const {title,description}=post 
    return (
        <div className="card card-border bg-base-100 w-96 mt-4">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary"> Show Details</button>
                </div>
            </div>
        </div>
    );
};

export default Post;