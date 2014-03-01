function Graph() {
  var self = this;
  self.unconfirmedTransactions = [];

  var ui = D3UI();

  ui.registerGroup("uncategorized");
  ui.registerGroup("block");

  this.addUnconfirmedTransaction = function(tx) {
    tx.category = "uncategorized";
    ui.appendNode(tx, {})
  };

  this.addTransactionsForBlock = function(txs, block) {
    for (var i = 0; i < txs.length; i++) {
      var tx = txs[i];
      tx = { id: tx };
      tx.category = "block";

      ui.appendNode(tx, { color: "#00cc00" });
    };
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
