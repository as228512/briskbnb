import { combineReducers } from "redux";
import modal from "./modal_reducer";
import filters from "./filters_reducer";
import loadingState from "./loading_reducer";

export default combineReducers({
  modal,
  filters,
  loadingState
});
