export const validTime = (time: string): boolean => time.split(':').reduce((acc, curr, index) => acc = acc && (index === 0 ? +curr / 24 < 1 : +curr / 60 < 1), true)

console.log(validTime('13:58'));
console.log(validTime('25:51'));
console.log(validTime('02:76'));