import React from 'react';


const CommitCommentEvent = ({repo, payload}) => {
    const { push_id, size, distinct_size, ref, head, before, commits } = payload;
    return (
        <div>
            <span>
                Pushed to {ref} in {repo.name}
            </span>
        </div>
    );
};



export default CommitCommentEvent;
