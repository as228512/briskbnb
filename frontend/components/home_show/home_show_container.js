import { connect } from "react-redux";
import { fetchHome } from "../../actions/home_actions";
import { selectHome, selectBookingsForHome } from "../../reducers/selectors";
import { eraseHomes } from "../../actions/home_actions";
import HomeShow from "./home_show";

const mapStateToProps = (state, { match }) => {
  const homeId = parseInt(match.params.homeId);
  const home = selectHome(state.entities, homeId);
  const bookedDates = selectBookingsForHome(home);
  const currentLoadingState = state.ui.loadingState.homeLoading;
  return {
    homeId,
    home,
    bookedDates,
    currentLoadingState
  };
};

const mapDispatchToProps = dispatch => ({
  fetchHome: id => dispatch(fetchHome(id)),
  eraseHome: () => dispatch(eraseHomes())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeShow);
