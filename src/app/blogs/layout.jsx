import React from 'react';

const PostLayout = ({children}) => {
    return (
        <div>
            <h1>Fixed portion of blogs layouts</h1>
            <div>
                {children}
            </div>
            
        </div>
    );
};

export default PostLayout;