import React from 'react';

// TODO::Fetch data from an API instead of using static data!

const blogsData = [
    {
        id: 1,
        title: "Learn JavaScript",
        author: "Rahat",
        category: "JavaScript",
        description: "JavaScript is a powerful programming language used to make websites interactive.",
        image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479",
        date: "2026-10-01"
    },
    {
        id: 2,
        title: "Getting Started with React",
        author: "Rahat",
        category: "React",
        description: "React is a JavaScript library for building user interfaces and web applications.",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
        date: "2026-10-02"
    },
    {
        id: 3,
        title: "Understanding CSS Flexbox",
        author: "Rahat",
        category: "CSS",
        description: "Flexbox makes it easier to create flexible and responsive layouts.",
        image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2",
        date: "2026-10-03"
    },
    {
        id: 4,
        title: "What is TypeScript?",
        author: "Rahat",
        category: "TypeScript",
        description: "TypeScript adds static typing to JavaScript and helps developers write safer code.",
        image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea",
        date: "2026-10-04"
    },
    {
        id: 5,
        title: "Introduction to Next.js",
        author: "Rahat",
        category: "Next.js",
        description: "Next.js is a React framework used to build modern full-stack web applications.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
        date: "2026-10-05"
    }
];

const PostDetailsPage = async ({ params }) => {
    const { postId } = await params;
    // TODO:Load data from database
    const post = blogsData.find(post => post.id === parseInt(postId))
    console.log(postId, post)
    return (
        <div>
            <h2>Post Details Page:{postId}</h2>
            {
                post && <div>
                    <h2> {post.title}</h2>
                    <p>By{post.author}</p>
                    <p>{post.description}</p>
                </div>
            }

        </div>
    );
};

export default PostDetailsPage;