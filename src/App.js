import React from 'react';
import './App.css';

import Dashboard from './components/Dashboard';
import LandinPage from './components/LandingPage';
import Template1 from './components/Template1';
import Template2 from './components/Template2';
import Template3 from './components/Template3';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

class App extends React.Component {
  state={}
  
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path = "/template1" component={Template1} />
          <Route path = "/template2" component={Template2} />
          <Route path = "/template3" component={Template3} />
          <Route path = "/landingpage" component={LandinPage} />
          <Route path = "/" component={Dashboard} />
          <div className="App"></div>
      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
