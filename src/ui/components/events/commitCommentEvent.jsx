import React from 'react';


const CommitCommentEvent = ({repo, payload}) => {
    const { action, comment } = payload;
    return (
        <div>
            <span>
                <h3>{action}</h3>
                <h3>{comment.body}</h3>
            </span>
        </div>
    );
};



export default CommitCommentEvent;
