import React from 'react';


const CommitCommentEvent = ({repo, payload}) => {
    return (
        <div>
            <span>
                event happend in {repo.name}
            </span>
        </div>
    );
};



export default CommitCommentEvent;
