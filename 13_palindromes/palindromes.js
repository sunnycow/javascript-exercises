/**
 * @param {string} str 
 */

const palindromes = function (str) {
  const cleaned = str.toLowerCase().replace(/[\W_]/g, '');

  for (let i = 0; i < cleaned.length / 2; i++) {
    if (cleaned[i] != cleaned[cleaned.length - 1 - i]) {
      return false;
    }
  }

  return true;
};

// Do not edit below this line
module.exports = palindromes;
