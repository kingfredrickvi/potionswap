
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import PotionHeader from './components/PotionHeader';
import PotionsHave from './components/PotionsHave';
import PotionsWant from './components/PotionsWant';
import CreateAd from './components/CreateAd';
import Request from './components/Request';
import Requests from './components/Requests';
import User from './components/User';
import Login from './components/Login';
import Account from './components/Account';

function App() {
  return (
    <div className="App">
      <PotionHeader />
      <Router>
        <Route exact path="/" render={props => (
          <PotionsHave />
        )} />
        <Route path="/want" render={props => (
          <PotionsWant />
        )} />
        <Route path="/create" render={props => (
          <CreateAd />
        )} />
        <Route path="/user" render={props => (
          <User />
        )} />
        <Route path="/request" render={props => (
          <Request />
        )} />
        <Route path="/requests" render={props => (
          <Requests />
        )} />
        <Route path="/login" render={props => (
          <Login />
        )} />
        <Route path="/account" render={props => (
          <Account />
        )} />
      </Router>
    </div>
  );
}

export default App;
