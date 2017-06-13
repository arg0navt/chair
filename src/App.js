import React, { Component } from 'react';
import { css } from 'aphrodite/no-important';
import { IndexRoute, IndexRedirect, Router, Route, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { router } from './router'
import g from './style/global'


class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        { router }
      </Router>
    );
  }
}

export default connect(
  state => ({
    State: state
  }),
  dispatch =>({})
)(App)
