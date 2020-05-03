

var input = [8,1,4,9,7,0];

// var radius = 20;

// console.log(input);


var preprocess = function(input) {
    var res = [];
    for (var i = 0; i < input.length; i++) {
        var obj = {"val" : input[i]};
        res.push(obj);
    }
    return res;
}

var jsonInput = preprocess(input); 
console.log(jsonInput);

// var jsonCircles = [
//     { "x_axis": 30, "y_axis": 30, "radius": 20, "color" : "white" },
//     { "x_axis": 80, "y_axis": 30, "radius": 20, "color" : "white"},
//     { "x_axis": 130, "y_axis": 30, "radius": 20, "color" : "white"},
//     { "x_axis": 180, "y_axis": 30, "radius": 20, "color" : "white"},
//     { "x_axis": 230, "y_axis": 30, "radius": 20, "color" : "white"},
//     { "x_axis": 280, "y_axis": 30, "radius": 20, "color" : "white"},
//     { "x_axis": 330, "y_axis": 30, "radius": 20, "color" : "white"}
//     ];

// var svg = d3.select("body").append("svg").attr("width", 200).attr("height", 200);

var distance = 50;

function updateChart() {

    console.log("aaa");

    var svg = d3.select("#d3chart");
    var groups = svg.selectAll(".groups")
                        .data(jsonInput, function(d) {
                            return d.val;
                        })
                        .enter()
                        .append("g")
                        .attr("class", "gbar");

    // var enterG = binding.enter().append("g");

    enterG.append("rect").attr("width", 40).attr("height", 40);

    enterG.append("text")
     .attr("x", 3)
     .attr("y", 3)
     .text(function(d) {return d.val;});

    binding.transition()
     .attr("transform", function(d, i) {
        console.log(i*50);
        return "translate(" + i * 50 + ",0)";
       
     });

     console.log(binding);
}


function test() {
    // var data = d3.range(8).map(()=>~~(Math.random()*130));
    var data = input;

    var svg = d3.select("svg")

    var groups = svg.selectAll(".groups")
        .data(data)
        .enter()
        .append("g")
        .attr("class", "gbar");
        
    groups.append("rect")
        .attr("x", (d,i)=> i * 50)
        .attr("width", 40)
        .attr("y", 20)
        .attr("height", 40)
        .attr("fill", "white")
        .attr("line", "black");
        
    groups.append("text")
        .attr("x", (d,i)=> i * 50 + 16)
        .attr("y", 43)
        .text(d=>d)
}

function create_hashmap_placeholder() {
    $(".solution").append("<div>A</div>");
}

$(function(){
    // updateChart();
    test();
    create_hashmap_placeholder();
});
