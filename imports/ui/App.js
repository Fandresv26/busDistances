import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from "meteor/react-meteor-data";
import AccountsUIWrapper from "./AccountsUIWrapper.js";
import Visualization from "./Visualization.js";

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
                <AccountsUIWrapper />

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


