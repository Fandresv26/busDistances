import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from "meteor/react-meteor-data";
import * as d3 from "d3";

import BusesList from "./BusesList.jsx";

//Components
import ApisTester from "./ApisTester.jsx";
import UserNavBar from "../Navs/UserNavBar.jsx";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = this.getMeteorData();
        this.handleChange = this.handleChange.bind(this);
    }

    getMeteorData() {
        return {

        };
    }
    
    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    render() {

        return (
            <div id="App">
                <UserNavBar />

                <div className="container">
                    <h1>App</h1>
                    <hr className="my-4" />
                    <BusesList> buses={this.state.buses}</BusesList>
                </div>
            </div>
        );
    }
}

App.propTypes = {
}

export default withTracker(
    () => {
        //Meteor.subscribe('users');

        //const currentUser = Meteor.user();

        return {
            //user: currentUser
        }
    }
)(App);