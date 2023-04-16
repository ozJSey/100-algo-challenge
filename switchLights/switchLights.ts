const switchAll = (a: number[]) => a.map(x => x === 1 ? 0 : 1);

export const switchLights = (a: number[]): number[] => {
  let ar: number[] = []
  for (let i = 0; i < a.length; i++) {
    ar.push(a?.[i]);
    if (a[i] === 1) {
      ar = switchAll(ar.slice(0, i));
    }
  }
  return ar;
}

console.log(switchLights([1, 1, 1, 1, 1]));
console.log(switchLights([1, 1, 1, 1, 1, 1]));
console.log(switchLights([0, 0]));
console.log(switchLights([0, 1]));
console.log(switchLights([1, 0]));