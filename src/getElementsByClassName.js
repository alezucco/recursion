// If life was evasy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){

  var hasClass = function(node, className) {
    var classes = node.className.split(' ');
    return classes.indexOf(className) !== -1;
  }

  var node = arguments[1];
  if (node === undefined) {
    node = document.body;
  }
  var results = [];


  if (hasClass(node, className)) {
    results.push(node);
  }

  for (var i = 0; i < node.children.length; i++) {
    var child = node.children[i];
    results = _.union(results, getElementsByClassName(className, child));
  }

  return results;
};