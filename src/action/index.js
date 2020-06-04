import axios from 'axios';

const githubUserRepoApi = 'https://api.github.com/users/nerocui/repos?page=1&per_page=100';
const githubUserEventsApi = 'https://api.github.com/users/nerocui/events';

function dispatchRepos(repos) {
    return {
        payload: repos,
        type: 'SET_REPOS',
    };
}


function dispatchEvents(events) {
    return {
        payload: events,
        type: 'SET_EVENTS',
    };
}

export function getRepos() {
    return dispatch => {
        axios.get(githubUserRepoApi)
            .then(({data}) => dispatch(dispatchRepos(data)))
            .catch(e => console.log('Failed to get repos.', e))
    };
}

export function getEvents() {
    return dispatch => {
        axios.get(githubUserEventsApi)
            .then(({data}) => dispatch(dispatchEvents(data)))
            .catch(e => console.log('Failed to get events.', e))
    };
}
