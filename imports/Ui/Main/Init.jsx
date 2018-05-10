import React, { Component } from 'react';

import "../Css/Init.css";

//Components
import InitNavBar from "../Navs/InitNavBar.jsx";

class Init extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div id="Init">
                <InitNavBar />

                <div className="container">
                    <h1>Welcome to the template</h1>
                    <App> </App>

                </div>
            </div>
        );
    }
}

export default Init;