import React from 'react';


const CommitCommentEvent = ({repo, payload}) => {
    const { action, issue, changes, assignee, label } = payload;
    return (
        <div>
            <span>
                {action} issue: {issue.body}
            </span>
        </div>
    );
};



export default CommitCommentEvent;
