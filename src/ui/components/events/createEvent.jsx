import React from 'react';


const CommitCommentEvent = ({repo, payload}) => {
    const { ref, ref_type, description } = payload;
    return (
        <div>
            <span>
                <a href={`https://github.com/${repo.name}`}>
                    <p>
                        Created {ref_type}
                    </p>
                </a>
            </span>
        </div>
    );
};



export default CommitCommentEvent;
