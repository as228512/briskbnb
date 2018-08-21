import { combineReducers } from "redux";
import sessionModal from "./modal_reducer";
import filters from "./filters_reducer";
import loadingState from "./loading_reducer";

export default combineReducers({
  sessionModal,
  filters,
  loadingState
});
