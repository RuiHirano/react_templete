import React from 'react';
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import Routes from "./Routes";
import theme from "./styles/theme";

const browserHistory = createBrowserHistory();

const App: React.FC = () => {
  return (
    <div style={{ height: '100vh' }}>
      <ThemeProvider theme={theme}>
        <Router history={browserHistory}>
          <Routes />
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
