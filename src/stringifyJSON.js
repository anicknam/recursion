// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  var result = "";

  function typeID(sth){
    if (typeof sth === "function" || sth === undefined) {
      result += "";
    } else if (sth === null || sth === true || sth === false) {
      result+= String(sth);
    } else if (sth.constructor === Object) {
      result+="{";
      for (var key in sth){
        if (sth[key] === undefined || typeof sth[key] === "function"){
          result+="";
        } else {
          result+= "\""+String(key)+"\":";
          typeID(sth[key]);
          result+=",";
        }
      }
      result+="}";
    } else if (Array.isArray(sth)) {
      result+= "[";
      for (var i=0;i<sth.length;i++){
        typeID(sth[i]);
        result+=",";
      }
      result+="]";
    } else if (typeof sth === "string") {
      result+= "\""+sth+"\"";
    } else {
      result+= String(sth);
    }

  }

  typeID(obj)

  result=result.replace(/,}/g,"}");
  result=result.replace(/,]/g,"]");

  return result;
};