import { useSelector } from 'react-redux';
import './App.css';
import LoginPage from './components/loginPage/loginPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ProfilePage } from './components/profilePage/progilePage';


function App() {
  const state = useSelector(state => state.auth)
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/profile'>
            <ProfilePage login={state.login}/>
          </Route>
          <Route path='/'>
            <h1>Вход</h1>
            <LoginPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
