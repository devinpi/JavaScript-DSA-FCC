function rot13(str) {
  let cipher = str.split(" ");
  console.log("cipher: ", cipher);
  const regex1 = /[A-Z]+/gi;
  let found = [];
  let encodedArr = [];
 
  for(let i = 0; i<cipher.length; i++){
    found.push(cipher[i].match(regex1)[0]);
  }
/*  
for(let i = 0; i < found.length; i++){
    let encode = "";
    for(let j = 0; j<found[i].length; j++){
      if(found[i].charCodeAt(j) - 13 < 65){//if encoding reached a value below 65
        var diff = 64 - (found[i].charCodeAt(j) - 13);
        encode += String.fromCharCode(90 - diff);
      }
      else{
        encode += String.fromCharCode(found[i].charCodeAt(j) - 13);
      }
    }
    encodedArr.push(encode);
  }
  console.log(encodedArr);
  return str;
}
*/
  for(let i = 0; i < cipher.length; i++){
    let encode = "";
    for(let j = 0; j<cipher[i].length; j++){
      if(cipher[i][j].match(regex1)){
        if(cipher[i].charCodeAt(j) - 13 < 65){//if encoding reached a value below 65
        var diff = 64 - (found[i].charCodeAt(j) - 13);
        encode += String.fromCharCode(90 - diff);
        }
        else{
          encode += String.fromCharCode(found[i].charCodeAt(j) - 13);
        }        
      }
      else{
        encode += cipher[i][j];
      }
    }
    encodedArr.push(encode);
  }
  //console.log(encodedArr);
  return encodedArr.join(" ");

}
rot13("SERR PBQR PNZC");