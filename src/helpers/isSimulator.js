module.exports = function isSimulator() {
  var isSimulator = !this.event.context; //simulator doesn't send context
  return isSimulator;
};
