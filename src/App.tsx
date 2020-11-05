import React from 'react';
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import Routes from "./Routes";

const browserHistory = createBrowserHistory();

const App: React.FC = () => {
  return (
    <div style={{ height: '100vh' }}>
      <Router history={browserHistory}>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
