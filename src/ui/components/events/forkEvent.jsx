import React from 'react';


const CommitCommentEvent = ({repo, payload}) => {
    const { forkee } = payload;
    return (
        <div>
            <span>
                <p>
                    Forked {forkee.full_name} from {repo.name}
                </p>
            </span>
        </div>
    );
};



export default CommitCommentEvent;
