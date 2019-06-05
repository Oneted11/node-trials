const qs = require("querystring");
require("http")
  .createServer((req, res) => {
    if (req.url == "/") {
      res.writeHead(200, { "content-Type": "text/html" });
      res.end(
        [
          "<form method='POST' action='url'>",
          "<h1>My form</h1>",
          "<fieldset>",
          "<label>Pesonal Information</label>",
          "<p>what is your name</p>",
          '<input type="text" name="name"></input>',
          "<p><button>Submit</button></p>",
          "</form>"
        ].join("")
      );
    } else if ("/url" == req.url && "POST" == req.method) {
      let body = "";
      req.on("data", function(chunk) {
        body += chunk;
      });
      req.on("end", function() {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(
            "<p> Your name is <em><b>" + qs.parse(body).name + "</b></em></p>"
          );
        });
    }else{
      res.writeHead(404)
      res.end("Not Found")
    }
  })
  .listen(3000);
