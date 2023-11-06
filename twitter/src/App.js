import { useParams } from 'react-router-dom';
import './App.css';
import Profile from './pages/Profile';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Signup from './pages/Signup';

function App() {

  
  return (

    <div className="App">
      <Switch>
        <Route path="/profile/:id" exact>
          <Profile/>
        </Route>
        <Route path="/signup" exact>
          <Signup />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
