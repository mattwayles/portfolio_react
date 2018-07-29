import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Layout from './containers/Layout/Layout';
import Main from './containers/Main/Main';
import './App.css';

class App extends Component {
  render() {
      return (
      <div className="App">
          <BrowserRouter>
            <Layout>
                <Switch>
                    <Route path="/" component={Main} />
                    <Redirect to="/" />
                </Switch>
            </Layout>
          </BrowserRouter>
      </div>
    );
  }
}


export default App;
