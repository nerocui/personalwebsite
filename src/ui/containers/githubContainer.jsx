import React, { useState } from 'react';
import RepoList from './repoList';
import EventList from './eventList';

const GitHubContainer = () => {
    const [ selectedTab, setSelectedTab ] = useState('repo');
    return (
        <div className="github-list-container">
            <div className="tab-container">
                <div className="tabs">
                    <div className={selectedTab === 'repo'? 'tab selected' : 'tab'} onClick={() => setSelectedTab('repo')}>
                        <h1>Repositories</h1>
                    </div>
                    <div className={selectedTab === 'event'? 'tab selected' : 'tab'} onClick={() => setSelectedTab('event')}>
                        <h1>
                            Activities
                        </h1>
                    </div>
                </div>
            </div>
            <div className="github-list-window">
                {
                    selectedTab === 'repo' ?
                    <RepoList />
                    :
                    <EventList />
                }
            </div>
        </div>
    );
};

export default GitHubContainer;
