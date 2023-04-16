export const incorrectPasscodeAttempts = (passcode: string, attempts: string[]): boolean => attempts.filter(attempt => attempt !== passcode).length >= 10;

console.log(incorrectPasscodeAttempts('1111', ["1111", "4444", "9999", "3333", "8888", "2222", "7777", "0000", "6666", "7285", "5555", "1111"]));