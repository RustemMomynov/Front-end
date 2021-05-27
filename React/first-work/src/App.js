import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Redirect, Route } from "react-router-dom";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Redirect to="/profile" />
      <Header />
      <Navbar />
      <Route path="/dialogs" render={() => <Dialogs store={props.store} />} />
      <Route
        path="/profile"
        render={() => (
          <Profile
            profilePage={props.state.profilePage}
            dispatch={props.dispatch}
          />
        )}
      />
    </div>
  );
};

export default App;
