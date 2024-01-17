function checkCashRegister(price, cash, cid) {
  const currencyUnit = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
  }
  

  let cashTotal = 0;

  for (let i = 0; i < cid.length; i++) {
    cashTotal += cid[i][1];
  }

  cashTotal = Number(cashTotal.toFixed(2));

  let changeToGive = Number((cash - price).toFixed(2));
  console.log(cashTotal)

  if (cashTotal < changeToGive) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }

  if (cashTotal == changeToGive) {
    return {status: 'CLOSED', change: cid}
  }

  let changeArr = [];

  for (let i = cid.length - 1; i >= 0; i--) {
    let currencyUnitName = cid[i][0];
    let currencyUnitValueTotal = cid[i][1];
    let currencyUnitValue = currencyUnit[currencyUnitName];
    let currencyUnitAmount = Number((currencyUnitValueTotal / currencyUnitValue).toFixed(2));
    let currencyUnitsToReturn = 0;

    while (changeToGive >= currencyUnitValue && currencyUnitAmount > 0) {
      changeToGive -= currencyUnitValue;
      changeToGive = Number(changeToGive.toFixed(2));
      currencyUnitAmount--;
      currencyUnitsToReturn++;
    }
    if (currencyUnitsToReturn > 0) {
      changeArr.push([currencyUnitName, currencyUnitsToReturn * currencyUnitValue])
    }
  }
  if (changeToGive > 0) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }

  return {status: 'OPEN', change: changeArr}
}

console.log(checkCashRegister(19.10, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));


console.log('change')




