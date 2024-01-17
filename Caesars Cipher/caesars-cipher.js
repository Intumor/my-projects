const alphabet = {
  'A': 'N',
  'B': 'O',
  'C': 'P',
  'D': 'Q',
  'E': 'R',
  'F': 'S',
  'G': 'T',
  'H': 'U',
  'I': 'V',
  'J': 'W',
  'K': 'X',
  'L': 'Y',
  'M': 'Z',
  'N': 'A',
  'O': 'B',
  'P': 'C',
  'Q': 'D',
  'R': 'E',
  'S': 'F',
  'T': 'G',
  'U': 'H',
  'V': 'I',
  'W': 'J',
  'X': 'K',
  'Y': 'L',
  'Z': 'M'
};

const rot13 = (str) => {
  const regex = /[^A-Za-z]/;
  const arr = []
  for (let i = 0; i < str.length; i++ ) {
    for (const key in alphabet) {
      if (str[i] == key) {
        arr.push(alphabet[key]);
      } else if (regex.test(str[i])) {
        arr.push(str[i]);
        break;
      }
    }
  }
  const result = arr.join('');
  return result;
}


console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));