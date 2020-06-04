import React from 'react';
import { connect } from 'react-redux';
import { getRepos } from '../../action';
import RepoList from './repoList';
import '../styles/dashboard.scss';

const Dashboard = ({ getRepos }) => {
    getRepos();
    return (
        <div className="dashboard">
            <div className="container">
                <section id="repo-section">
                    <div className="title-container">
                        <h2>GitHub Repository</h2>
                    </div>
                    <div className="repo-list-container">
                        <div className="repo-list-window">
                            <RepoList />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default connect(null, { getRepos })(Dashboard);
