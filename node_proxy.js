var http = require('http'),
    httpProxy = require('http-proxy');
var proxy = new httpProxy.createProxyServer({
    target: {
       host: 'ws.blockchain.info',
       port: 8335
    }
});
var proxyServer = http.createServer(function (req, res) {
    proxy.web(req, res);
});

proxyServer.on('upgrade', function (req, socket, head) {
  proxy.ws(req, socket, head);
});

proxyServer.listen(8080);
