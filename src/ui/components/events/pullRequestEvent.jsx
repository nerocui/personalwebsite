import React from 'react';


const CommitCommentEvent = ({repo, payload}) => {
    const { action, number, changes, pull_request } = payload;
    return (
        <div>
            {action} pull request in {repo.name}
        </div>
    );
};



export default CommitCommentEvent;
