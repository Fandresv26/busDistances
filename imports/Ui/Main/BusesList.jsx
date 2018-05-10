import React, { Component } from 'react';
import PropTypes from "prop-types";

import Bus from "./Bus.jsx";

export default class BusesList extends Component {
	constructor(props) {
		super(props);

		this.state={

		};
	}

	renderBus() {

		return this.props.Bus.map((p, i) => 
			<Bus 
				key={i}
				bus={p}>
			</Bus>
		);
	}



	render() {
		return (
			<div className="BusesList">
				<h2>Bus:</h2>
				{this.renderBus()}
			</div>
		);
	}
}

BusesList.propTypes={
	
};
