import { connect } from 'react-redux';
import { fetchHome } from '../../actions/home_actions';
import { selectHome } from '../../reducers/selectors';
import HomeShow from './home_show';

const mapStateToProps = (state, { match }) => {
  const homeId = parseInt(match.params.homeId);
  const home = selectHome(state.entities, homeId);
  return {
    homeId,
    home
  };
};

const mapDispatchToProps = dispatch => ({
  fetchHome: id => dispatch(fetchHome(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeShow);
