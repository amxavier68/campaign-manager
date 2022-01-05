import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

//Layout imports
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';
import Footer from './Footer';
import Terms from './Terms';
import Privacy from './Privacy';

class App extends Component {

  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
        <Router>
          <Header />
            <div className="container">
                <Route exact path="/" component={Landing} />
                <Route exact path="/surveys" component={Dashboard} />
                <Route path="/surveys/new" component={SurveyNew} />
            </div>
            <Footer/>
            <Terms />
            <Privacy />
        </Router>
    )
  }
};

export default connect(null, actions)(App);