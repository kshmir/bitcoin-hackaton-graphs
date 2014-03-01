var wsParseTx = function(e) {
  var parsed = JSON.parse(e.data).x; 
  var obj = {
    size: parsed.size,
    state: "UNCONFIRMED",
    id: parsed.hash
  };
  return new Node(obj);
}
