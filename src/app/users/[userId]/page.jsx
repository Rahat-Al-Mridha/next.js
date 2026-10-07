import React from 'react';

const UserDetailPage = async({params}) => {
    const {userId} =await params;

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await res.json();
    return (
        <div>
           
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.phone}</p>
        </div>
    );
};

export default UserDetailPage;