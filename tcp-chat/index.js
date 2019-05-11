const net = require("net");

let count = 0;
//create server
const server = net.createServer(conn => {
  // handle connection
//   console.log("\033[90mnew connection!\033[39m");
  conn.write(
    "\n > welcome to \033[92mNode-chat\033[39m!" +
      "\n > " +
      count +
      " other people connected at this time." +
      "\n > please write your name and press enter: "
  );
  count++;
  conn.on("data", data => {
    console.log("data");
  });
  conn.on("close", () => {
    count--;
  });
});

//listen
server.listen(3000, () => {
  console.log("\033[96m   server listening on *:3000 \033[39m");
});
