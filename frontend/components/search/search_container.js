import { connect } from 'react-redux';
import { updateFilter } from '../../actions/filter_actions';
import { eraseHomes } from '../../actions/home_actions';
import { asArray } from '../../reducers/selectors';
import Search from './search';
import homesReducer from '../../reducers/homes_reducer';

const mapStateToProps = state => ({
  currentLoadingState: state.ui.loadingState.indexLoading,
  homes: asArray(state.entities),
});

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  eraseHomes: () => dispatch(eraseHomes())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
