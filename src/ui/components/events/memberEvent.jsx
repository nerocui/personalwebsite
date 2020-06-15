import React from 'react';


const CommitCommentEvent = ({repo, payload}) => {
    const { action, member, changes } = payload;
    return (
        <div>
            <span>
                {action} user: {member.login}
            </span>
        </div>
    );
};



export default CommitCommentEvent;
