import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import Home from './components/pages/home';
import NotFound from './components/pages/notFound';
import Header from './components/layout/header';
import ProfileContainer from './components/container/profile'
import RepositoriesContainer from './components/container/repositories';
import WatchedContainer from './components/container/watched';

const App = () => {

  return (
    <Router>
          <div className='App'>
            <Header title="Merrit Front-End"/>
            <Container>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/user/:login' component={ProfileContainer} />
                <Route exact path='/user/:login/repositories' component={RepositoriesContainer} />
                <Route exact path='/user/:login/watched' component={WatchedContainer} />
                <Route component={NotFound} />
              </Switch>
            </Container>
          </div>
        </Router>
  );
}

export default App;
