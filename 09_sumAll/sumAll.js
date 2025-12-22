const sumAll = function(start, end) {
  if ((start < 0 || !Number.isInteger(start)) || (end < 0 || !Number.isInteger(end))) {
    return 'ERROR';
  }

  // total count of numbers in the range
  const count = Math.abs(start - end) + 1;

  // use gauss summation formula
  const sum = (count * (start + end)) / 2;

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
