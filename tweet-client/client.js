const http = require("http");
http
  .request(
    {
      host: "127.0.0.1",
      port: 3000,
      url: "/",
      method: "GET"
    },
    res => {
      let body = "";
      res.setEncoding("utf8");
      res.on("data", chunk => {
        body += chunk;
      });
      res.on("end", () => {
        console.log("\n we got: \033[96m" + body + "\033[39m\n");
      });
    },(error)=>{console.error(error)}
  )
  .end();
