import React from 'react';
import '../styles/repoCard.scss';
import StarIcon from './starIcon';
import ForkIcon from './forkIcon';

const GitHubRepoCard = ({name, description, html_url, language, stargazers_count, forks, fork }) => {
    return (
        <div className="github-repo-card">
            <div>
                <h3>
                    <a href={html_url}>{name}{fork ? "(forked)" : ""}</a>
                </h3>
                <p>{description ? description : 'No description provided'}</p>
            </div>
            <div>
                <div className="properties">
                    <div>
                        <div className="counts">
                            <a className="count" href={html_url} target="_blank">
                                <div className="property">
                                    <StarIcon fill="white" className="property-item"/>
                                    <p className="property-item">{stargazers_count}</p>
                                </div>
                            </a>
                            <a className="count" href={html_url} target="_blank">
                                <div className="property">
                                    <ForkIcon fill="white" className="property-item"/>
                                    <p className="property-item">{forks}</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    {language ? <p className="language">{language}</p> : ''}
                </div>
            </div>
        </div>
    )
};

export default GitHubRepoCard;
