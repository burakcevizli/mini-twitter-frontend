import './App.css';
import Profile from './pages/Profile';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  
  return (

    <div className="App">
      <Switch>
        <Route path="/profile" exact>
          <Profile />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
