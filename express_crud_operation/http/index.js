const http = require("http"); //we require the http pkg from node
const { url } = require("inspector");
http
  .createServer((req, res) => {
    console.log(req.url);
    if (url == "/") {
      res.write("<h1>Hello World</h1>");
    } else if (url == "/hobbies");
    {
      res.write("<h1>Hobbies</h1>");
    }

    res.end();
  })
  .listen(2000);
