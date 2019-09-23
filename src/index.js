module.exports = function multiply(first, second) {
  console.log(BigInt(first));
  
  return BigInt(first) * BigInt(second) + '';
}
