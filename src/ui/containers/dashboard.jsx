import React from 'react';
import { connect } from 'react-redux';
import { getRepos, getEvents } from '../../action';
import RepoList from './repoList';
import '../styles/dashboard.scss';
import GitHubContainer from './githubContainer';
import Lottie from 'react-lottie';
import animationData from '../data/code.json';

const Dashboard = ({ getRepos, getEvents }) => {
    getRepos();
    getEvents();
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
    };
    return (
        <div className="dashboard">
            <div className="container">
                <section id="github-section">
                    <div className="title-container">
                        <div className="title-item">
                            <h1>I'm Active on GitHub</h1>
                            <Lottie options={defaultOptions} height={400} width={400}/>
                        </div>
                    </div>
                    <GitHubContainer />
                </section>
            </div>
        </div>
    );
};

export default connect(null, { getRepos, getEvents })(Dashboard);
