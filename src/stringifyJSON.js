// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  var result = "";

  function typeID(sth){
    if (sth == undefined) {return;}
    if (sth.constructor === Object) {
      result+="{";
      for (var key in sth){
        result+= "\""+String(key)+"\":";
        typeID(sth[key]);
      }
      result+="}";
    }
    else if (Array.isArray(sth)) {
      result+= "[";
      for (var i=0;i<sth.length;i++){
        typeID(sth[i]);
      }
      result+="]";
    } else if (sth == undefined || sth === true || sth === false){
      result+= String(sth);
    } else if (typeof sth === "function" || sth === undefined) {
      result += "null";
    } else {
      result+= String(sth)+",";
    }
  }

  (typeof obj === "number") ? result = String(obj): typeID(obj);

  result=result.replace(/,}/,"}");
  result=result.replace(/,]/,"]");

  //return "\""+result+"\"";
  return result;
};
