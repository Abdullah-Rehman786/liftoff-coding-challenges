function FirstReverse(str) { 

    // code goes here
    let reversed = '';
    for(let i = str.length-1; i > -1; i--){
      reversed += str[i];
    }
    return reversed; 
  
  }
     
  // keep this function call here 
  console.log(FirstReverse(readline()));