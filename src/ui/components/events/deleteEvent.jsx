import React from 'react';


const CommitCommentEvent = ({repo, payload}) => {
    const { ref_type } = payload;
    return (
        <div>
            <span>
                <h2>Deleted {ref_type} {repo.name}</h2>
            </span>
        </div>
    );
};



export default CommitCommentEvent;
