import React, { Component } from 'react';
import PropTypes from "prop-types";
import * as d3 from "d3";

export default class Visualization extends Component {
	constructor(props) {
		super(props);

		this.state={

		};
	}

	componentDidMount(){

		const height = 600,
		svg = d3.select(DOM.svg(width, height)),
	    margin = {top: 20, right: 50, bottom: 30, left: 40},    
	    g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

		var x = d3.scaleBand()
		    .rangeRound([0, width - margin.left - margin.right])
		    .paddingInner(0.05)
		    .align(0.1);

		var y = d3.scaleLinear()
		    .rangeRound([height - margin.top - margin.bottom, 0]);

		var z = d3.scaleSequential(d3.interpolateBlues);

		  x.domain(nestedBuses.map(function(d) { return d.key; }));
		  y.domain([0, d3.max(nestedBuses, function(d) { return d.total; })]).nice();
		  z.domain([0, maxNumBuses]);

		  g.append("g")
		    .selectAll("g")
		    .data(stackedBuses)
		    .enter().append("g")
		      .attr("fill", function(d) { return z(d.key); })
		      .attr("stroke", "white")
		    .selectAll("rect")
		    .data(function(d) { return d; })
		    .enter().append("rect")
		      .attr("x", function(d) { return x(d.data.key); })
		      .attr("y", function(d) { return y(d[1]); })
		      .attr("height", function(d) { return y(d[0]) - y(d[1]); })
		      .attr("width", x.bandwidth());

		  g.append("g")
		      .attr("class", "axis")
		      .attr("transform", "translate(0," + (height- margin.top - margin.bottom) + ")")
		      .call(d3.axisBottom(x));

		  g.append("g")
		      .attr("class", "axis")
		      .call(d3.axisLeft(y).ticks(null, "s"))
		    .append("text")
		      .attr("x", 2)
		      .attr("y", y(y.ticks().pop()) + 0.5)
		      .attr("dy", "0.32em")
		      .attr("fill", "#000")
		      .attr("font-weight", "bold")
		      .attr("text-anchor", "start")
		      .text("Added distance");

		  var legend = g.append("g")
		      .attr("font-family", "sans-serif")
		      .attr("font-size", 10)
		      .attr("text-anchor", "end")
		    .selectAll("g")
		    .data(keys.slice().reverse())
		    .enter().append("g")
		      .attr("transform", function(d, i) { return "translate(-50," + i * 20 + ")"; });

		  legend.append("rect")
		      .attr("x", width - 19)
		      .attr("width", 19)
		      .attr("height", 19)
		      .attr("fill", z);

		  legend.append("text")
		      .attr("x", width - 24)
		      .attr("y", 9.5)
		      .attr("dy", "0.32em")
		      .text(function(d) { return d; });

		  return svg.node();
	}

	getDistance(lat1,lon1,lat2,lon2){
		    function deg2rad(deg) {
		      return deg * (Math.PI/180);
		    }

		    var R = 6371; // Radius of the earth in km
		    var dLat = deg2rad(lat2-lat1);  // deg2rad below
		    var dLon = deg2rad(lon2-lon1);
		    var a =
		      Math.sin(dLat/2) * Math.sin(dLat/2) +
		      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
		      Math.sin(dLon/2) * Math.sin(dLon/2)
		      ;
		    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
		    var d = R * c; // Distance in km
		    return d;
	}

	render() {
		return (
			<div className="Visualization">
				<svg 
					width="800"
					height="200"
					ref = {(svg) => this.svg=svg}
				></svg>
			</div>
		);
	}
}

Visualization.propTypes={
	buses: PropTypes.array.isRequired
};
