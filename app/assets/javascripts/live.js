function blockChainLive(localGraph) {
  ws = new WebSocket("ws://localhost:8080/inv");
  ws.onopen    = function()  { ws.send('{"op":"unconfirmed_sub"}');     };
  ws.onmessage = function(e) { 
    localGraph.addUnconfirmedTransaction(wsParseTx(e));
  }
  ws.onerror   = function()  { console.log("WebSocket error.")     };
  ws.onclose   = function()  { console.log("Connection closed.");  };

  wsBlocks = new WebSocket("ws://localhost:8080/inv");
  wsBlocks.onopen    = function()  { ws.send('{"op":"blocks_sub"}');     };
  wsBlocks.onmessage = function(e) { 
    alert(" NEW BLOCK! ");
    console.log("New block!");
  }
  wsBlocks.onerror   = function()  { console.log("WebSocket error.")     };
  wsBlocks.onclose   = function()  { console.log("Connection closed.");  };
}
