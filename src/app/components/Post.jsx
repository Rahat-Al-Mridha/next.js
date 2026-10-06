import Link from 'next/link';
import React from 'react';

const Post = ({ post }) => {
    const { title, description, id } = post;
    return (
        <div className="card card-border w-96 bg-base-100  mt-4">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <Link href={`/blogs/${id}`}>
                        <button className="btn btn-primary"> Show Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Post;