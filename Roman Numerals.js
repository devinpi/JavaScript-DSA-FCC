function convertToRoman(num) {
    const roman ={
      "M": 1000,
      "CM": 900,
      "D": 500,
      "CD": 400,
      "C": 100,
      "XC": 90,
      "L": 50,
      "XL": 40,
      "X": 10,
      "IX": 9,
      "V": 5,
      "IV": 4,
      "I": 1,
    };
    let romanStr = "";
    for(let k of Object.keys(roman)){
      //console.log(roman[k]);
      var unit = Math.floor(num / roman[k]);
      if(unit >= 1){
       for(let i = 0; i < unit; i++){
         romanStr += k;
       } 
       num -= roman[k]*unit;  
      }
    }
    //console.log(romanStr);
    return romanStr;
   }
   //took some help from other sources. I was trying to come up with a better solution. Instead using if else statements and figuring out the units, tenths, hundreds place.
   convertToRoman(36);