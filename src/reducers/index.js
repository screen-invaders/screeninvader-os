import login from "./login.js";
import overlay from "./overlay.js";
import search from "./search.js";
import windows from "./windows.js";

export default function reducer(state = {}, action) {
  return {
    login: login(state, action),
    overlay: overlay(state, action),
    search: search(state.search, action),
    windows: windows(state, action),
    menu: (state => state)(state.menu),
    user: (state => state)(state.user),
    searchDropdown: (state => state)(state.searchDropdown),
    filesystem: (state => state)(state.filesystem)
  }
}