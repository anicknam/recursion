// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){

  //storage array
  var result = [];

  //recursive case
  function matchNode(node){

    if(_.contains(node.classList, className)) {
      result.push(node);
    }

    _.each(node.childNodes,function(child) {
    matchNode(child);
    });

  };

  matchNode(document.body);

  return result;
};

