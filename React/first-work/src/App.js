
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Redirect, Route} from "react-router-dom"



const App = (props) => {
    return (  
        <BrowserRouter>
        <Redirect to="/profile" />
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <Route path="/dialogs" render={  () => <Dialogs />  } />
                <Route path="/profile" render={  () => <Profile />  } />

            </div>    
            </BrowserRouter>
    )
}

export default App;
