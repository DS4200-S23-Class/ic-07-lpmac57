
const FRAME_HEIGHT = 200;
const FRAME_WIDTH = 500;
const MARGINS = {left: 50, right: 50, top: 50, bottom: 50};



const data2 = [55000, 48000, 27000, 66000, 90000];

// map from data values down to pixel values (scaling functions)

const VIS_HEIGHT = FRAME_HEIGHT - MARGINS.top - MARGINS.bottom;// frame - margins = actual area to plot within
const VIS_WIDTH = FRAME_WIDTH - MARGINS.left - MARGINS.right;


const FRAME3 = d3.select("#vis1")
					.append("svg")
						.attr("height", FRAME_HEIGHT)
						.attr("width", FRAME_WIDTH)
						.attr("class", "frame");

// scaling functions

const MAX_X = d3.max(data2, (d) => {return d;});
console.log("Max x:" + MAX_X);

// scale function
const X_SCALE = d3.scaleLinear()
					.domain([0, (MAX_X + 10000)])
					.range([0, VIS_WIDTH]);

FRAME3.selectAll("points")
		.data(data2)
		.enter()
		.append("circle")
			.attr("cx", (d) => {
				return (X_SCALE(d) + MARGINS.left);
			})
			.attr("cy", MARGINS.top)
			.attr("r", 10)
			.attr("class", "point");

// add an axis

FRAME3.append("g")
		.attr("transform", 
			"translate(" + MARGINS.left + "," + (VIS_HEIGHT + MARGINS.top + ")")) // margins.left = x & rest is y
		.call(d3.axisBottom(X_SCALE).ticks(4))
			.attr("font-size", "20px");

































