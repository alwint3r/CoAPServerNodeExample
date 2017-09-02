'use strict';

const coap = require(`coap`);
const server = coap.createServer({ type: `udp4` });

server.on(`request`, (req, res) => {
  console.log(`request`, JSON.stringify(req));
  res.end(`Hello ${req.url.split(`/`)[1]}\n`);
});

server.listen(5683, () => {
  console.log(`Listening on port 5683`);
});
