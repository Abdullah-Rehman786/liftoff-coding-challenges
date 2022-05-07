function LongestWord(sen) { 
  
  let splitSen = sen.split(' ');
  const regex = /[^A-Za-z]/gi;
  let longest = 0;
  let longestWord = '';
  for(let word of splitSen){
    
    let length = word.replace(regex,'').length;
    if(length > longest){
      longest = length;
      longestWord = word.replace(regex,'');
    }
  }
  // code goes here  
  return longestWord; 

}
   
// keep this function call here 
console.log(LongestWord(readline()));
