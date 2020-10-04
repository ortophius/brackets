module.exports = function check(str, bracketsConfig) {
  const openingBrackets = bracketsConfig.map(brackets => brackets[0]).join('');
  const closingBrackets = bracketsConfig.map(brackets => brackets[1]).join('');
  let expectedBrackets = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const isOpeningBracket = openingBrackets.indexOf(char) !== -1;
    const isClosingBracket = closingBrackets.indexOf(char) !== -1;
    const expectedBracket = expectedBrackets[expectedBrackets.length - 1];

    if (isOpeningBracket) {
      if (char === expectedBracket) expectedBrackets.splice(-1, 1);
      else expectedBrackets.push(closingBrackets[openingBrackets.indexOf(char)]);
      continue;
    }

    if (isClosingBracket) {
      if (char !== expectedBracket) return false;
      expectedBrackets.splice(-1, 1);
    }
  }

  return (expectedBrackets.length === 0 ) ? true : false;
}
