import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Add from './pages/Add';
import Welcome from './pages/Welcome';
import WishList from './pages/WishList';
import GlobalStyle from './GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/add">
            <Add />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/wishlist">
            <WishList />
          </Route>
          <Route path="/">
            <Redirect to="/welcome" />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
