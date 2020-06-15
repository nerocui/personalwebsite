import React from 'react';
import { connect } from 'react-redux';
import GitHubEventCard from '../components/githubEventCard';
import '../styles/eventList.scss';
import GitHubListContainer from './githubListContainer';

const EventList = ({ items }) => {
    return <GitHubListContainer items={items} ChildCard={GitHubEventCard}/>
}

function mapStateToProps(state) {
    return {
        items: state.eventReducer.items,
    };
}

export default connect(mapStateToProps)(EventList);
