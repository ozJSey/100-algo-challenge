const fn = (num) => num - num.toString().split('').reduce((a, c) => a + +c, 0) // provided by the question

export const mostFrequentDigitSum = (n: number): any => {
  // No one line solution available
  const valueArray: number[] = [n];
  const differenceArray: number[] = [];
  let activeItem = valueArray[valueArray.length - 1];
  while (activeItem > 0) {
    let functionResult = fn(activeItem);
    differenceArray.push((activeItem - functionResult ?? 0))
    valueArray.push(functionResult);
    activeItem = functionResult;
  }
  return differenceArray.map((value, i, _array) => ({
    value,
    frequency: _array.filter(item => item === value).length
  })).sort((a, b) => b.frequency - a.frequency)?.[0].value ?? 0;
}

console.log(mostFrequentDigitSum(88));
console.log(mostFrequentDigitSum(8));