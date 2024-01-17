const palindrome = (str) => {
  const regex = /[^A-Za-z0-9]/;
  let newStr = '';
  const newStrArr = [];
  let checker = [];

  for (let i = 0; i < str.length; i++) {
    if (!regex.test(str[i])) {
      newStr += str[i];
    }
  }
  newStr = newStr.toLowerCase();

  for (let i = 0; i < newStr.length; i++) {
    newStrArr.push(newStr[i]);
  }

  checker = [...newStrArr].reverse();

  let result = true;
  
  for (let i = 0; i < newStrArr.length; i++) {
    if (newStrArr[i] !== checker[i]) {
      result = false;
      break;
    }
  }
  return result;
}

console.log(palindrome('eye'));