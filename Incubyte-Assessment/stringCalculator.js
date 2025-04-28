function add(numbers) {
    // when input is empty string
    if (numbers === '') return 0;

    if (numbers.startsWith('//')) { // when input starts with delimiter
      const delimiter = numbers[2]; 
      numbers = numbers.slice(4);  
      numbers = numbers.replace(new RegExp(delimiter, 'g'), ',');
    }
  
    numbers = numbers.replace(/[\n,]/g, ','); //It will replace new lines and commas
  
    return numbers.split(',').map(Number).reduce((a, b) => a + b, 0);
  }
  
  
module.exports = { add };
