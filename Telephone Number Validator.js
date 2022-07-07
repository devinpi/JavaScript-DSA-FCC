function telephoneCheck(str) {
    const strCheck = /[^0-9|\-|(|)|\s]+/gi;
    let s = str.match(strCheck);
    //console.log(s);
    let checkFlag = false;
    if(!(s)){
      const teleRegex = /^(\+1|1[ (]|1)?(\(\d{3}\)|\d{3})[ -]?(\d{3})[ -]?(\d{4})/g;
      if(str.match(teleRegex) == str){
        checkFlag = true;
      }   
    }
    else{
      checkFlag = false;
    }
    return checkFlag;
  }
  console.log(telephoneCheck("555-555-5555"));