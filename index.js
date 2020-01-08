// Declare an array of all letters to reference later
const alphabetArray = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
]

// Declare function to decode cipher
const rot13 = str => {
  // Create strArray by splitting the str at every char
  const strArray = str.split('')

  // Declare decodedStr as an empty string to use later
  let decodedStr = ''

  // Loop through strArray with the forEach method
  strArray.forEach(x => {
    // Check to see if current char is in the alphabetArray or not
    if (alphabetArray.indexOf(x) === -1) {
      // If char is not in alphabetArray it must be a special char or space so we just add it to the decodedStr
      decodedStr += x
    } else {
      // Else we declare a variable called shiftedIndex and store the index of the char shifted by 13
      const shiftedIndex = alphabetArray.indexOf(x) + 13
      // If shiftedIndex is greater or equal to 26 then...
      if (shiftedIndex >= 26) {
        // Add the char at the index of the shiftedIndex minus 26
        decodedStr += alphabetArray[shiftedIndex - 26]
      } else {
        // Else just add the char at the index of the shiftedIndex
        decodedStr += alphabetArray[shiftedIndex]
      }
    }
  })
  // Return the decodedStr
  return decodedStr
}

rot13('SERR CVMMN!')
