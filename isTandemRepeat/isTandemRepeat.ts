export const isTandemRepeat = (inputString: string): boolean => {
  let bool = false;
  if (new Set(inputString.split('')).size < 2) return bool /* currently false */;
  for (let i = 0; i < inputString.length; i++) {
    if (inputString.substring(0, i) === inputString.substring(i)) {
      bool = true;
      break;
    }
  }
  return bool;
}

console.log(isTandemRepeat('tandemtandem'))
console.log(isTandemRepeat('qqq'))
console.log(isTandemRepeat('2w2ww'))
console.log(isTandemRepeat('2w2w'))
