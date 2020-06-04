import React from 'react';


const CommitCommentEvent = ({repo, payload}) => {
    const { ref, ref_type, description } = payload;
    return (
        <div>
            <span>
                <a href={`https://github.com/${repo.name}`}>
                    <h2>
                        Created {ref_type}
                    </h2>
                </a>
            </span>
        </div>
    );
};



export default CommitCommentEvent;
