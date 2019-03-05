console.log("hello?");

// Loop through each letter in originalString
// if it's in the dicionary, and if it
// put it's value in 'result'

function transl33t(originalString) {
  const leetDictionary = {
    // Keys are strings, just like in python
    // but in JS, quotes are optional
    A: "4",
    E: "3",
    G: "6",
    I: "1",
    O: "0",
    S: "5",
    T: "7"
  };
  let result = "";

  for (let i = 0; i < originalString.length; i++) {
    let theLetter = originalString[i].toUpperCase();
    // console.log(theLetter);
    // console.log(leetDictionary[theLetter]);
    if (leetDictionary[theLetter] !== undefined) {
      result += leetDictionary[theLetter];
    } else {
      // if it's not, just copy the letter into `result`
      result += theLetter;
    }
  }
  return result;
}
