console.log(1);
process.nextTick(() => {
  console.log(3);
});
console.log(2);
