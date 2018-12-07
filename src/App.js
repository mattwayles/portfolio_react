import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Layout from './containers/Layout/Layout';
import Main from './containers/Main/Main';
import Personal from "./containers/Personal/Personal";
import Resume from "./containers/Resume/Resume";
import Contact from "./containers/Contact/Contact";
import Portfolio from "./containers/Portfolio/Portfolio";

class App extends Component {
  render() {
      return (
      <div>
          <BrowserRouter>
            <Layout>
                <Switch>
                    <Route path="/" exact component={Main} />
                    <Route path="/personal" component={Personal} />
                    <Route path="/resume" component={Resume} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/contact" component={Contact} />
                    <Redirect to="/" />
                </Switch>
            </Layout>
          </BrowserRouter>
      </div>
    );
  }
}


export default App;
