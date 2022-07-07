function checkCashRegister(price, cash, cid) {
  let changeVal = cash - price;
  let state = {status: "",
    change: []
  };
  const money = {
    "PENNY": 1,
    "NICKEL": 5,
    "DIME": 10,
    "QUARTER": 25,
    "ONE": 100,
    "FIVE": 500,
    "TEN": 1000,
    "TWENTY": 2000,
    "ONE HUNDRED": 10000
  };
  let change1 = changeVal * 100;
  let count = [];
  let changeArr = [];
  
  //using reduce to add the total cash in drawer
  let totalCash = cid.reduce(function(a,b) { return a + b[1] }, 0);
  totalCash = totalCash * 100;//to avoid floating point errors

  //console.log(totalCash, change1);
  
  if(changeVal*100 > totalCash){
    state.status = "INSUFFICIENT_FUNDS";
    state.change = [];
  }
  else if(changeVal*100 === totalCash){
    state.status = "CLOSED";
    state.change = cid;
  }
  else{
    for(let i = cid.length-1; i >= 0; i--){
      if(!(change1 < Object.values(money)[i])){
        var num = Math.round(cid[i][1]*100/Object.values(money)[i]);
        //console.log(num);
        if(!(num == 0)){
          for(let j = num; j > 0; j--){
              change1 = (change1 - Object.values(money)[i]);
              // console.log("money: ",Object.values(money)[i]);
              // console.log("change: ",change1);
              count = [Object.keys(money)[i], (num -j+1)*Object.values(money)[i]/100];
              if(change1 < Object.values(money)[i] || change1 === 0){
                //console.log(change1)
                break;
              }
          }    
        }
        else{
          break;
        }
      changeArr.push(count);
      }
    } 
    if(num === 0){
      state.status = "INSUFFICIENT_FUNDS";
      state.change = [];
    }
    else{
      state.status = "OPEN";
      state.change = changeArr; 
    }
  }
  return state;
}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], 
["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], 
["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
console.log(checkCashRegister(19.5, 20, 
[["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], 
["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], 
["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

console.log(checkCashRegister(19.5, 20, 
[["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], 
["QUARTER", 0], ["ONE", 1], ["FIVE", 0], 
["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], 
["QUARTER", 0], ["ONE", 0], ["FIVE", 0], 
["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));