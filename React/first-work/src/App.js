import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Music from "./components/Music/Music/Music";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Redirect to="/profile" />
      <Header />
      <Navbar />
      <Route path="/dialogs" render={() => <DialogsContainer />} />
      <Route path="/profile" render={() => <Profile />} />
      <Route path="/music" render={() => <Music />} />
    </div>
  );
};

export default App;
