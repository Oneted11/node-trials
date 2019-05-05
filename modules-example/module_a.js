exports.name = "john";
exports.data = "this is some data";

var privateVariable = 5;

exports.getPrivate = () => {
  return privateVariable;
};
