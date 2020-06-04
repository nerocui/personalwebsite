import React from 'react';


const CommitCommentEvent = ({repo, payload}) => {
    const { forkee } = payload;
    return (
        <div>
            <span>
                <h2>
                    Forked {forkee.full_name} from {repo.name}
                </h2>
            </span>
        </div>
    );
};



export default CommitCommentEvent;
