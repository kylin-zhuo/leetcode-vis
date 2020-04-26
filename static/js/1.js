
var input = [8,1,4,9,7,0];

var radius = 20;

console.log(input);

var jsonCircles = [
    { "x_axis": 30, "y_axis": 30, "radius": 20, "color" : "white" },
    { "x_axis": 80, "y_axis": 30, "radius": 20, "color" : "white"},
    { "x_axis": 130, "y_axis": 30, "radius": 20, "color" : "white"},
    { "x_axis": 180, "y_axis": 30, "radius": 20, "color" : "white"},
    { "x_axis": 230, "y_axis": 30, "radius": 20, "color" : "white"},
    { "x_axis": 280, "y_axis": 30, "radius": 20, "color" : "white"},
    { "x_axis": 330, "y_axis": 30, "radius": 20, "color" : "white"}
    ];

var svgContainer = d3.select("body").append("svg").attr("width", 200).attr("height", 200);

var circles = svgContainer.selectAll("circle")
                    .data(jsonCircles)
                    .enter()
                    .append("circle");

var circleAttributes = circles
                .attr("cx", function (d) { return d.x_axis; })
                .attr("cy", function (d) { return d.y_axis; })
                .attr("r", function (d) { return d.radius; })
                .style("fill", function(d) { return d.color; });