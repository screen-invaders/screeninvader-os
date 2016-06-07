import container from "./container.js";
import data from "./data.js";
import explorer from "./explorer.js";
import browser from "./browser.js";

export default function windows(state, action) {
  let newState;

  newState = container(state, action);
   if (newState)
    return newState;

  newState = data(state, action);
   if (newState)
    return newState;

  newState = explorer(state, action);
   if (newState)
    return newState;

  newState = browser(state, action);
  if (newState)
    return newState;

  return [ ...state.windows ] || [];
}