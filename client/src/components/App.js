import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux'; // helper functions, give components the ability to call action creators
import * as actions from '../actions'; // import all action creators & assign to actions object

import Header from './Header';
import Landing from './Landing';

const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>

class App extends Component {

/**
 *  When the component is mounted or rendered call an action creator to fetch the current user
 *  Shouldn't we use componentWillMount()? To figure out what the current user is before rendering
 *  1) That method will be called multiple times in future React releases automatically,
 *     componentDidMount is the preferred method for initial AJAX requests
 *  2) Difference in performance is hardly noticeable
 */
    componentDidMount() { 
        this.props.fetchUser();
    } 

    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/surveys" component={Dashboard} />
                        <Route path="/surveys/new" component={SurveyNew} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
};

export default connect(null, actions)(App); // actions assigned to App component as props