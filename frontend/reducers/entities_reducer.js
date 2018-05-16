import { combineReducers } from 'redux';
import users from './users_reducer';
import homes from './homes_reducer';

const entitiesReducer = combineReducers({
  users,
  homes,
});

export default entitiesReducer;
