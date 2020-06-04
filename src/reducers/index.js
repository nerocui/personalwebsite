import { combineReducers } from "redux";
import repoReducer from './repoReducer';
import eventReducer from './eventReducer';

const rootReducer = combineReducers({
    repoReducer,
    eventReducer,
});

export default rootReducer;
