// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
  //
  var stringifyArray = function(a) {
    return '[' + _.map(a, stringifyJSON).join(',') + ']';
  }

  var stringifyObject = function(o) {

    var pairings = [];

    var stringifyPairing = function(v,k) {
      if (v !== undefined && typeof(v) !== "function") {
        pairings.push("\"" + k + "\"" + ':' + stringifyJSON(v));
      }
    }
    _.each(o, stringifyPairing);
    return '{' + pairings.join(',') + '}';
  }

  var t = typeof(obj);
  if (t === "number" || t === "boolean") {
    return obj+'';
  } else if (t === "string") {
    return "\"" + obj + "\"";
  } else if (obj === undefined
          || obj === null
          || t === "function"
          || obj === NaN) {
    return "null";
  } else if (Array.isArray(obj)) {
    return stringifyArray(obj);
  } else { // It's an Object!
    return stringifyObject(obj);
  }
};