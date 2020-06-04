import React from 'react';


const CommitCommentEvent = ({repo, payload}) => {
    const { action, changes, issue, comment } = payload;
    return (
        <div>
            <span>{action} comment in issue {issue.title} in {repo.name}</span>
        </div>
    );
};



export default CommitCommentEvent;
