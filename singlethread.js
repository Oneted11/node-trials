const start = Date.now();
setTimeout(() => {
  console.log("first", Date.now() - start);
  for(let i=0;i < 1000000000;i++){}
}, 1000);
setTimeout(() => {
  console.log("second", Date.now() - start);
}, 2000);
