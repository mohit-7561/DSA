// Infinite Currying


const add = (a)=>{
  return function(b){
    if(b !== undefined){
      return add(a+b)
    }
    else {
      return a
    }
  }
}



console.log(add(5)(5)(8)(3)(7)(2)());