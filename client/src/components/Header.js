import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
    //Helper function for deciding what content to render based on user login state
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return <li><a href="/auth/google">Login With Google</a></li>;
            default:
            return [
            //These keys are static just to get rid of the errors since we are rendering a list of elements
                <li key="1"><Payments /></li>,
                <li key="2"><a href="/api/logout">Logout</a></li>
            ]
        }
    }

    render() {
        //console.log(this.props);
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link 
                        to={this.props.auth ? '/surveys' : '/'} 
                        className="left brand-logo"
                    >
                    WhatUp
                    </Link>
                    <ul className="right">
                        { this.renderContent() }
                    </ul>
                </div>
            </nav>
        );
    }
}

//we only care about the auth property of the state object. Hook up our Header to our Redux State
function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);