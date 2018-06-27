import * as APIUtil from '../util/home_api_util';

export const RECEIVE_HOMES = 'RECEIVE_HOMES';
export const RECEIVE_HOME = 'RECEIVE_HOME';
export const START_LOADING_HOMES = 'START_LOADING_HOMES';

export const receiveHomes = homes => ({
  type: RECEIVE_HOMES,
  homes,
});

export const receiveHome = home => ({
  type: RECEIVE_HOME,
  home,
});

export const startLoadingHomes = () => ({
  type: START_LOADING_HOMES
});


export const fetchHomes = filters => dispatch => {
  dispatch(startLoadingHomes());
  return APIUtil.fetchHomes(filters).then(homes => (
    dispatch(receiveHomes(homes))
  ));
};

export const fetchHome = id => dispatch => (
  APIUtil.fetchHome(id).then(home => (
    dispatch(receiveHome(home))
  ))
);

export const createHome = home => dispatch => (
  APIUtil.createHome(home).then(home => (
    dispatch(receiveHome(home))
  ))
);
