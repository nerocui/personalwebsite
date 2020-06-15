import React from 'react';
import CommitCommentEvent from './events/commitCommentEvent';
import CreateEvent from './events/createEvent';
import DeleteEvent from './events/deleteEvent';
import ForkEvent from './events/forkEvent';
import GollumEvent from './events/gollumEvent';
import IssueCommentEvent from './events/issueCommentEvent';
import IssuesEvent from './events/issuesEvent';
import MemberEvent from './events/memberEvent';
import PublicEvent from './events/publicEvent';
import PullRequestEvent from './events/pullRequestEvent';
import PullRequestReviewCommentEvent from './events/pullRequestReviewCommentEvent';
import PushEvent from './events/pushEvent';
import ReleaseEvent from './events/releaseEvent';
import SponsorshipEvent from './events/sponsorshipEvent';
import WatchEvent from './events/watchEvent';
import GenericEvent from './events/genericEvent';
import '../styles/eventCard.scss';

const EVENT_TYPE = {
    CommitCommentEvent: 'CommitCommentEvent',
    CreateEvent: 'CreateEvent',
    DeleteEvent: 'DeleteEvent',
    ForkEvent: 'ForkEvent',
    GollumEvent: 'GollumEvent',
    IssueCommentEvent: 'IssueCommentEvent',
    IssuesEvent: 'IssuesEvent',
    MemberEvent: 'MemberEvent',
    PublicEvent: 'PublicEvent',
    PullRequestEvent: 'PullRequestEvent',
    PullRequestReviewCommentEvent: 'PullRequestReviewCommentEvent',
    PushEvent: 'PushEvent',
    ReleaseEvent: 'ReleaseEvent',
    SponsorshipEvent: 'SponsorshipEvent',
    WatchEvent: 'WatchEvent',
};

const GitHubEventCard = props => {
    return (
        <div className="github-event-card">
            {GetEvents(props)}
        </div>
    );
};

const GetEvents = ({type, repo, payload}) => {
    switch (type) {
        case EVENT_TYPE.CommitCommentEvent: 
            return <CommitCommentEvent repo={repo} payload={payload} />
        case EVENT_TYPE.CreateEvent: 
            return <CreateEvent repo={repo} payload={payload} />
        case EVENT_TYPE.DeleteEvent: 
            return <DeleteEvent repo={repo} payload={payload} />
        case EVENT_TYPE.ForkEvent: 
            return <ForkEvent repo={repo} payload={payload} />
        case EVENT_TYPE.GollumEvent: 
            return <GollumEvent repo={repo} payload={payload} />
        case EVENT_TYPE.IssueCommentEvent: 
            return <IssueCommentEvent repo={repo} payload={payload} />
        case EVENT_TYPE.IssuesEvent: 
            return <IssuesEvent repo={repo} payload={payload} />
        case EVENT_TYPE.MemberEvent: 
            return <MemberEvent repo={repo} payload={payload} />
        case EVENT_TYPE.PublicEvent: 
            return <PublicEvent repo={repo} payload={payload} />
        case EVENT_TYPE.PullRequestEvent: 
            return <PullRequestEvent repo={repo} payload={payload} />
        case EVENT_TYPE.PullRequestReviewCommentEvent: 
            return <PullRequestReviewCommentEvent repo={repo} payload={payload} />
        case EVENT_TYPE.PushEvent: 
            return <PushEvent repo={repo} payload={payload} />
        case EVENT_TYPE.ReleaseEvent: 
            return <ReleaseEvent repo={repo} payload={payload} />
        case EVENT_TYPE.SponsorshipEvent: 
            return <SponsorshipEvent repo={repo} payload={payload} />
        case EVENT_TYPE.WatchEvent: 
            return <WatchEvent repo={repo} payload={payload} />
        default:
            return <GenericEvent repo={repo} payload={payload} />
    }
};

export default GitHubEventCard;
