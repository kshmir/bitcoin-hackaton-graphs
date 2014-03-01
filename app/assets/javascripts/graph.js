function Graph() {
  var self = this;
  self.unconfirmed_transactions = [];

  var nodes = [
    {id: 1, label: 'Node 1'},
    {id: 2, label: 'Node 2'}
  ];
  var container = document.getElementById('graph');
  var options = {
    width: '100%',
    height: '600px'
  };
  var graph = new vis.Graph(container, undefined, options);
  this.addUnconfirmedTransaction = function(tx) {
     this.unconfirmed_transactions.push(tx);
     var data = {
       nodes: this.unconfirmed_transactions,
       edges: []
     };
     graph.setData(data);
  };

  return this;
};

function Node(opts) {
  this.label = this.id = opts.id;
  this.label = this.label.substr(0,7);
  this.state = opts.state;
  this.size = opts.size;  
  return this; 
}
