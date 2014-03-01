function Graph() {
  var self = this;
  self.unconfirmedTransactions = [];

  var ui = D3UI();

  this.addUnconfirmedTransaction = function(tx) {
  };

  this.addTransactionsForBlock = function(txs, block) {
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
