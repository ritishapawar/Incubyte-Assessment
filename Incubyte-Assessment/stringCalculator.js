function add(numbers) {
    // when input is empty string
    if (numbers === '') return 0;

    // This will handle negative numbers if gievn in input and throws an error
    const negativeNumbers = numbers.match(/-\d+/g);
    if (negativeNumbers) {
      throw new Error(`negative numbers not allowed ${negativeNumbers.join(', ')}`);
    }

    if (numbers.startsWith('//')) { // when input starts with delimiter
      const delimiter = numbers[2]; 
      numbers = numbers.slice(4);  
      numbers = numbers.replace(new RegExp(delimiter, 'g'), ',');
    }
  
    numbers = numbers.replace(/\/\/|\\\\|\\n|n/g, ','); //It will replace new lines and commas
  
    return numbers.split(',').map(Number).reduce((a, b) => a + b, 0);
  }
 
module.exports = { add };
