function D3UI() {
  var width = 1280,
      height = 600;

  var fill = d3.scale.category10();

  var nodes = [];

  var force = d3.layout.force()
    .nodes(nodes)
    .size([width, height])
    .gravity(0.5)
    .on("tick", tick)
    .start();

  var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

  var node = svg.selectAll(".node")
    .data(nodes)
    .enter().append("circle")
    .attr("class", "node")
    .attr("cx", function(d) { return d.x; })
    .attr("cy", function(d) { return d.y; })
    .attr("r", 5)
    .style("fill", function(d, i) { return fill(i & 3); })
    .style("stroke", function(d, i) { return d3.rgb(fill(i & 3)).darker(2); })

    function tick(e) {
      var k = 10 * e.alpha;
      nodes.forEach(function(o, i) {
        o.y += i & 1 ? k : -k;
        o.x += i & 2 ? k : -k;
      });
      node.attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; });
    }

  svg.style("opacity", 1e-6)
    .transition()
    .duration(1000)
    .style("opacity", 1);

  return this;
}
