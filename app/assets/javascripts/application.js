// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require util
//= require vis.min
//= require graph
//= require_tree .

$(document).ready(function() {
  var localGraph = new Graph();
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
    console.log("New block!");
  }
  wsBlocks.onerror   = function()  { console.log("WebSocket error.")     };
  wsBlocks.onclose   = function()  { console.log("Connection closed.");  };
});
