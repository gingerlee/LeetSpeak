var leetSpeak = function(input) {
  var result;

  result = input;
  result = result.replace(/e/gi,"3");
  result = result.replace(/o/gi, "0");
  result = result.replace(/I/g, "1");
  result = result.replace(/s/gi, "z");

  return result;
};
