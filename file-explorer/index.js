const fs = require("fs");

fs.readdir(process.cwd(), (err, files) => {
  console.log("");
  if (!files.length) {
    return console.log("          \033[31m No Files to show!\033[39m\n");
  }
  console.log("   Select which file or Directory you want to see\n");
  function file(i) {
    const filename = files[i];
    fs.stat(__dirname + "/" + filename, (err, stat) => {
      if (stat.isDirectory()) {
        console.log("  " + i + "     \033[36m" + filename + "/\033[39m");
      } else {
        console.log("    " + i + "     \033[90m" + filename + "\033[39m");
      }
      i++;
      if (i == files.length) {
        console.log(" ");
        process.stdout.write("    \033[33m Enter your choice: \033[39m");
        process.stdin.resume();
      } else {
        file(i);
      }
    });
  }
});
