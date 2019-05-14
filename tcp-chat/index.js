const net = require("net");

let count = 0,
  users = {};
//create server
const server = net.createServer(conn => {
  // handle connection
  //   console.log("\033[90mnew connection!\033[39m");
  let nickname;
  conn.write(
    "\n > welcome to \033[92mNode-chat\033[39m!" +
      "\n > " +
      count +
      " other people connected at this time." +
      "\n > please write your name and press enter: "
  );
  const broadcast = (msg, exceptMyself) => {
    for (let i in users) {
      if (!exceptMyself || i !== nickname) {
        users[i].write(msg);
      }
    }
  };

  conn.on("data", data => {
    data = data.toString().replace("\r\n", "");
    // the first piece of data you expect is the nickname
    if (!nickname) {
      if (users[data]) {
        conn.write("\033[93m> nickname already in use.try again: \033[39m ");
        return;
      } else {
        nickname = data;
        users[nickname] = conn;
        broadcast("\033[90m > " + nickname + " joined the room\033[39m\n");
      }
    } else {
      //otherwise consider it  a chat message
      broadcast("\033[96m > " + nickname + ":\033[39m " + data + " \n");
    }
  });
  count++;
  conn.on("close", () => {
    count--;
    delete users[nickname];
    broadcast('\033[90m > ' + nickname + ' left the room\033[39m\n');
  });
});

//listen
server.listen(3000, () => {
  console.log("\033[96m   server listening on *:3000 \033[39m");
});
