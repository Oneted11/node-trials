const fs = require("fs"),
  stdin = process.stdin,
  stdout = process.stdout;

fs.readdir(process.cwd(), (err, files) => {
  console.log("");
  if (!files.length) {
    return console.log("          \033[31m No Files to show!\033[39m\n");
  }
  console.log("   Select which file or Directory you want to see\n");

  //storage for file metadata ie stat
  const stats = [];

  //called for esch file in the dir
  function file(i) {
    const filename = files[i];
    fs.stat(__dirname + "/" + filename, (err, stat) => {
      stats[i] = stat;
      if (stat.isDirectory()) {
        console.log("       " + i + "   \033[36m" + filename + "/\033[39m");
      } else {
        console.log("       " + i + "   \033[90m" + filename + "\033[39m");
      }
      //   i++;
      if (++i == files.length) {
        read();
      } else {
        file(i);
      }
    });
  }

  //read user input when files are shown
  const read = () => {
    console.log("");
    stdout.write("    \033[33m Enter your choice: \033[39m");
    stdin.resume();
    stdin.setEncoding("utf8");
    stdin.on("data", option);
  };

  //called with the option supplied by user
  const option = data => {
    const filename = files[Number(data)];
    if (!filename) {
      stdout.write("    \033[31m Enter your choice: \033[39m");
    } else {
      stdin.pause();
      if (stats[Number(data)].isDirectory()) {
        fs.readdir(__dirname + "/" + filename, (err, files) => {
          console.log("");
          console.log("     (" + files.length + " files)");
          files.forEach(file => {
            console.log("     -   " + file);
          });
          console.log(" ");
        });
      } else {
        fs.readFile(__dirname + "/" + filename, "utf8", (err, data) => {
          console.log(" ");
          console.log(
            "\033[90m" + data.replace(/(.*)/g, "    $1") + "\033[39m"
          );
        });
      }
    }
  };

  file(0);
});
