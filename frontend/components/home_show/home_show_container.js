import { connect } from 'react-redux';
import { fetchHome } from '../../actions/home_actions';
import { fetchBookings } from '../../actions/booking_actions';
import { selectHome } from '../../reducers/selectors';
import { eraseHomes } from '../../actions/home_actions';
import HomeShow from './home_show';

const mapStateToProps = (state, { match }) => {
  const homeId = parseInt(match.params.homeId);
  const home = selectHome(state.entities, homeId);
  const currentLoadingState = state.ui.loadingState.homeLoading;
  return {
    homeId,
    home,
    currentLoadingState
  };
};

const mapDispatchToProps = dispatch => ({
  fetchHome: id => dispatch(fetchHome(id)),
  fetchBookings: id => dispatch(fetchBookings(id)),
  eraseHome: () => dispatch(eraseHomes())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeShow);
