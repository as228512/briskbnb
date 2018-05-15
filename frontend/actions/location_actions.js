import * as APIUtil from '../util/location_util';

export const RECEIVE_LOCATIONS = 'RECEIVE_LOCATIONS';

export const receiveLocations = locations => ({
  type: RECEIVE_LOCATIONS,
  locations,
});

export const fetchLocations = locations => dispatch => (
  APIUtil.fetchLocations(locations).then(locations =>
    dispatch(receiveLocations(locations))
  )
);
