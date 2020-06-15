import React from 'react';


const CommitCommentEvent = ({repo, payload}) => {
    const { action, changes, pull_request, comment } = payload;
    return (
        <div>
            <span>
                {action} pull request in {repo.name}
            </span>
        </div>
    );
};



export default CommitCommentEvent;
