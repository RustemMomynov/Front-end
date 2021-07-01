import { combineReducers, createStore } from "redux";
import DialogsReducer from "./dialogs-reducer";
import ProfileReducer from "./profile-reducer";
import SidebarReducer from "./sidebar-reducer";
import MusicReducer from "./music-reducer";

let reducers = combineReducers({
  profilePage: ProfileReducer,
  messagesPage: DialogsReducer,
  sidebar: SidebarReducer,
  music: MusicReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;
