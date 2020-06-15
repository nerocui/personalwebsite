import React, { useState } from 'react';
import { connect } from 'react-redux';
import GitHubRepoCard from '../components/githubRepoCard';
import '../styles/repoList.scss';
import GitHubListContainer from './githubListContainer';


const RepoList = ({ items }) => {
    return <GitHubListContainer items={items} ChildCard={GitHubRepoCard}/>
}


function mapStateToProps(state) {
    return {
        items: state.repoReducer.items,
    };
}

export default connect(mapStateToProps)(RepoList);
