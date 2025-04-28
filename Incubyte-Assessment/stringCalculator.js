function add(numbers) {
    if (numbers === '') return 0;
    const normalizedNumbers = numbers.replace(/\n/g, ',');
    return normalizedNumbers.split(',').map(Number).reduce((a, b) => a + b, 0);
  }
  
  module.exports = { add };
