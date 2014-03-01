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

  force.on("tick", function(e) {
    var k = 100 * e.alpha;
    nodes.forEach(function(o, i) {
      o.x += k * (groupClusterIndexes[o.category]);
    });

    node.attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; });
  });

  var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

  var node = svg.selectAll(".node"),
      link = svg.selectAll(".link");

  var groupKeyIndex = 0;
  var groupClusterIndexes = {};

  function tick(e) {
    node.attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; });
  }

  svg.style("opacity", 1e-6)
    .transition()
    .duration(1000)
    .style("opacity", 1);

  this.appendNode = function(n, opts) {

    nodes.push(n);
    node = node.data(force.nodes(), function(d) { return d.id;});
    node.enter()
      .append("circle")
      .attr("class", function(d) { return "node " + d.id; })
      .attr("r", 6)
      .attr("fill", opts.color || "#cc0000")
    node.exit().remove();

    force.start();
  };

  this.registerGroup = function(groupKey) {
    groupClusterIndexes[groupKey] = groupKeyIndex++;
  }

  return this;
}
