import React, { Component } from 'react';
import PropTypes from "prop-types";

export default class Bus extends Component {
	constructor(props) {
		super(props);

		this.state={

		};
	}

	renderRoute(){
		let res=[];
		{ 
			for (let route of nestedBuses ) {
      			route.total = 0;
      			route.values[0].distance = 0;
      			for (let i = 1 ; i < route.values.length; i++) {
        			route.values[i].distance = getDistance(+route.values[i-1].lat, +route.values[i-1].lon,
          			+route.values[i].lat, +route.values[i].lon);
        			route.total += route.values[i].distance;
      			}
  			}
 			return nestedBuses.sort(function(a, b) { return b.total - a.total; });
		}
	}

	render() {
		return (
			<div className="Post">
				<div>{this.props.bus.route}</div>
				{this.renderRoute()}
			</div>
		);
	}
}

Bus.propTypes={
	bus: PropTypes.object.isRequired
};
