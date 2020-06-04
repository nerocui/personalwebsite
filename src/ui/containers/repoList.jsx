import React from 'react';
import { connect } from 'react-redux';
import GitHubRepoCard from '../components/githubRepoCard';
import '../styles/repoList.scss';

const RepoList = ({ items }) => {
    return (
        <div className="repo-list">
            {
                items.map(item => <GitHubRepoCard {...item}/>)
            }
        </div>
    );
}

function mapStateToProps(state) {
    return {
        items: state.repoReducer.items,
    };
}

export default connect(mapStateToProps)(RepoList);
