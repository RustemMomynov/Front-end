import { combineReducers, createStore } from "redux";
import DialogsReducer from "./dialogs-reducer";
import ProfileReducer from "./profile-reducer";
import SidebarReducer from "./sidebar-reducer";

let reducers = combineReducers({
  profilePage: ProfileReducer,
  messagesPage: DialogsReducer,
  sidebar: SidebarReducer,
});

let store = createStore(reducers);

export default store;
