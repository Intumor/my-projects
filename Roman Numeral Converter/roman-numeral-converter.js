const romanNumeralsDataBase = {
  'M':	'1000',
  'CM':	'900',
  'D':	'500',
  'CD':	'400',
  'C':	'100',
  'XC':	'90',
  'L':	'50',
  'XL':	'40',
  'X':	'10',
  'IX':	'9',
  'V':	'5',
  'IV':	'4',
  'I':	'1'
}


const convertToRoman = (num) => {

  if (num == '0' || num == '00' || num == '000' || num == '0000' || num === undefined) {
    return '';
  }
  num = num + ''
  //First check if the number is in the database
  for (const key in romanNumeralsDataBase) {
    if (num == romanNumeralsDataBase[key]) {
      return key;
    }
  }

//for single digits
  if (num < 4 && num > 0) {
    let result = 'I'
    const toAdd = num - 1;
    for (let i = 1; i <= toAdd; i++) {
      result = result + 'I';
    }
    return result;
  }


  if (num < 9 && num > 5) {
    let result = 'V';
    const toAdd = num - 5;
    for (let i = 1; i <= toAdd; i++) {
      result += 'I'
    }
    return result;
  }

  let hasBeenCalled = false;
  //for double digits
  if (num > 9 && num < 100 && num[1] != 0) {
    let num1 = num[0] + 0;
    let num2 = num[1];
    let resultNum1 = function(num) {
      if (hasBeenCalled) {
        return;
      } else {
        hasBeenCalled = true;
        return convertToRoman(num);
      }
    }
    num1 = resultNum1(num1);
    hasBeenCalled = false;
    num2 = resultNum1(num2);
    return num1 + num2;
  }


  if (num < 40 && num > 10) {
    let result = 'X'
    const toAdd = num - 10;
    for (let i = 10; i <= toAdd; i += 10) {
      result = result + 'X';
    }
    return result;
  }


  if (num < 90 && num > 50) {
    let result = 'L';
    const toAdd = num - 50;//30
    for (let i = 10; i <= toAdd; i += 10) {
      result = result + 'X';
    }
    return result;
  }

//for triple digits

  if (num > 99 && num < 1000 && (num[1] != 0 || num[2] != 0)) {
    let num1 = num[0] + 0 + 0;
    let num2 = num[1] + 0;
    let num3 = num[2];
    if (num2 == '00') {
      let resultNum1 = function(num) {
        if (hasBeenCalled) {
          return;
        } else {
          hasBeenCalled = true;
          return convertToRoman(num);
        }
      }

      num1 = resultNum1(num1);
      hasBeenCalled = false;
      num3 = resultNum1(num3);
      return num1 + num3;
    }

    let resultNum1 = function(num) {
      if (hasBeenCalled) {
        return;
      } else {
        hasBeenCalled = true;
        return convertToRoman(num);
      }
    }
    num1 = resultNum1(num1);
    hasBeenCalled = false;
    num2 = resultNum1(num2);
    hasBeenCalled = false;
    num3 = resultNum1(num3);
    
    return num1 + num2 + num3;
  }

  if (num < 400 && num > 100) {
    let result = 'C'
    const toAdd = num - 100;
    for (let i = 100; i <= toAdd; i += 100) {
      result += 'C';
    }
    return result;
  }


  if (num < 900 && num > 500) {
    let result = 'D';
    const toAdd = num - 500;
    for (let i = 100; i <= toAdd; i += 100) {
      result += 'C'
    }
    return result;
  }

  //for quadruple digits

  if (num > 999 && num < 4000 && (num[1] != 0 || num[2] != 0 || num[3] != 0)) {
    let num1 = num[0] + 0 + 0 + 0;
    let num2 = num[1] + 0 + 0;
    let num3 = num[2] + 0;
    let num4 = num[3];
    if (num2 == '000') {
      if (num3 == '00') {
        let resultNum1 = function(num) {
          if (hasBeenCalled) {
            return;
          } else {
            hasBeenCalled = true;
            return convertToRoman(num);
          }
        }

        num1 = resultNum1(num1);
        hasBeenCalled = false;
        num4 = resultNum1(num4);
        return num1 + num4;
      }
      let resultNum1 = function(num) {
        if (hasBeenCalled) {
          return;
        } else {
          hasBeenCalled = true;
          return convertToRoman(num);
        }
      }

      num1 = resultNum1(num1);
      hasBeenCalled = false;
      num3 = resultNum1(num3);
      hasBeenCalled = false;
      num4 = resultNum1(num4);
      return num1 + num3 + num4;
    }

    let resultNum1 = function(num) {
      if (hasBeenCalled) {
        return;
      } else {
        hasBeenCalled = true;
        return convertToRoman(num);
      }
    }
    num1 = resultNum1(num1);
    hasBeenCalled = false;
    num2 = resultNum1(num2);
    hasBeenCalled = false;
    num3 = resultNum1(num3);
    hasBeenCalled = false;
    num4 = resultNum1(num4);
    return num1 + num2 + num3 + num4;

  }

  if (num < 4000 && num > 1000) {
    let result = 'M'
    const toAdd = num - 1000;
    for (let i = 1000; i <= toAdd; i += 1000) {
      result += 'M';
    }
    return result;
  }

}

console.log(convertToRoman(324));