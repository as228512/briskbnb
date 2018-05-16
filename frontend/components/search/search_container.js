import { connect } from 'react-redux';

import { asArray } from '../../reducers/selectors';
import Search from './search';

const mapStateToProps = state => ({
  homes: asArray(state.entities)
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
