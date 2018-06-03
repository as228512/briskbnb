import { connect } from 'react-redux';
import { updateFilter } from '../../actions/filter_actions'; // we need the lat long that updatefilter gets us to update home index
import { asArray } from '../../reducers/selectors';
import Search from './search';
import homesReducer from '../../reducers/homes_reducer';

const mapStateToProps = state => ({
  homes: asArray(state.entities)
});

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
