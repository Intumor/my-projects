const telephoneCheck = (number) => {
  const regex1 = /^\d{3}(-|\s*)\d{3}(-|\s*)\d\d\d\d$/;
  const regex2 = /^\(\d\d\d\)(\s*)\d\d\d(-|\s*)\d\d\d\d$/;
  const regex3 = /^1(-|\s*)\d\d\d(-|\s*)\d\d\d(-|\s*)\d\d\d\d/;
  const regex4 = /^1(\s*)\(\d\d\d\)(\s*)\d\d\d(-|\s*)\d\d\d\d/;
  let result = false;
  const regexArr = [regex1, regex2, regex3, regex4]

  for (let i = 0; i < regexArr.length; i++) {
    if (regexArr[i].test(number)) {
      result = true;
    }
  }

  return result;
}

console.log(telephoneCheck("17576227382"));



/*const regex1 = /^1(\s)*\d\d\d(-|\s*)\d\d\d(-|\s*)\d\d\d\d/;
  const regex2 = /^1(\s)?\(\d\d\d\)(\s*)\d\d\d(\s|-)\d\d\d\d/; 
  const regex3 = /\d\d\d(-|\s*)\d\d\d(-|\s*)\d\d\d\d/;*/