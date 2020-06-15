import React from 'react';


const CommitCommentEvent = ({repo, payload}) => {
    const { action } = payload;
    return (
        <div>
            <span>
                {action} {repo.name}
            </span>
        </div>
    );
};



export default CommitCommentEvent;
