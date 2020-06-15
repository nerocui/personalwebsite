import React from 'react';


const CommitCommentEvent = ({repo, payload}) => {
    return (
        <div>
            <span>
                Made repo {repo.name} public
            </span>
        </div>
    );
};



export default CommitCommentEvent;
