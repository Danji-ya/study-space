/** @jsxImportSource @emotion/react */
import { Global } from '@emotion/react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import reset from './assets/css/reset';
import AccomodationList from './pages/AccomodationList';
import Detail from './pages/Detail';
import Main from './pages/Main';

function App() {
  return (
    <Router>
      <Global styles={reset} />
      <Switch>
        <Route exact path={['/', '/main']}>
          <Main />
        </Route>
        <Route path="/accommodationList">
          <AccomodationList />
        </Route>
        <Route path="/detail/:id">
          <Detail />
        </Route>
        {/* <Route path="*">
          <NotFound />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
