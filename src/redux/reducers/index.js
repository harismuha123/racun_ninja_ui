import { combineReducers } from "redux";

import sidebar from "./sidebarReducers";
import layout from "./layoutReducer";

import { reducer as toastr } from "react-redux-toastr";

export default combineReducers({
  sidebar,
  layout,
  toastr
});
