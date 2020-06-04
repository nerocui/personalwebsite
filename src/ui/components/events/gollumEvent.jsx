import React from 'react';


const CommitCommentEvent = ({repo, payload}) => {
    const { pages } = payload;
    return (
        <div>
            <span>
                <h2>
                    Updated {pages.map(page => <span>{page.page_name}</span>)}
                </h2>
            </span>
        </div>
    );
};



export default CommitCommentEvent;
