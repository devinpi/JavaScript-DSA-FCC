function palindrome(str) {
  let regex = /[A-Za-z0-9]+/gi;
  
  let newStr = str.match(regex);
  //console.log(newStr);
  let s = newStr.join("").toLowerCase();
  //console.log(s);
  let palinFlag = false;
  for(let i = 0; i<s.length; i++){
    //for(let j = s.length-1; j <= 0; j--){
      if(s[i] === s[(s.length-1) - i]){
        palinFlag = true;
      }
      else{
        palinFlag = false;
        break;
      }
    
  }
  //console.log(palinFlag);
  return palinFlag;
}

palindrome("eye");