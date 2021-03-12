import React from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Menu from "./components/Menu";
import AppLayout from "./components/AppLayout";
import MapView from "./pages/MapView";
import Condition from "./pages/Condition";

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <AppLayout>
          <>
            <Menu />
            <Switch>
              <Route exact path="/" component={MapView} />
              <Route exact path="/condition" component={Condition} />
            </Switch>
          </>
        </AppLayout>
      </div>
    </Router>
  );
}

export default App;
