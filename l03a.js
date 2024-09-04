
function counter() { 
  var n = 0;  //calling context
  return function() { 
    n++; 
    return n;  
  }
}

function counterInitialized(x) { 
  var n = x;  //calling context
  return function() { 
    n++; 
    return n;  
  }
}
