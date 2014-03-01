(function($) {

window.txsForBlock = function(block, success) {
  var url = 'http://live.bitcore.io/api/txs/?callback=?&block=' + block;
  $.ajax({
    type: 'GET',
    url: url,
    async: false,
    jsonpCallback: 'jsonCallback',
    contentType: "application/json",
    dataType: 'jsonp',
    success: success,
    error: function(e) {
     console.log("Error from tx for block " + e.message);
   }
  });
}


window.updateBlocks = function(success) {
  var url = 'http://live.bitcore.io/api/blocks?callback=?';
  $.ajax({
    type: 'GET',
    url: url,
    async: false,
    jsonpCallback: 'jsonCallback',
    contentType: "application/json",
    dataType: 'jsonp',
    success: success,
    error: function(e) {
     console.log("Error from blocks " + e.message);
   }
  });
}

})(jQuery);
