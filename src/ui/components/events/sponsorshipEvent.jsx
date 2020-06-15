import React from 'react';


const CommitCommentEvent = ({repo, payload}) => {
    const { action, effective_date, changes } = payload;
    return (
        <div>
            <span>
                {action} in {repo.name}
            </span>
        </div>
    );
};



export default CommitCommentEvent;
