export const proCategorization = (pros: string[], preferences: string[][]): string[][][] => [...new Set(preferences.flat())].sort().map(p => [[p], pros.filter((pro, i) => preferences[i].includes(p))])

console.log(proCategorization(["Jack", "Leon", "Maria"], [["Computer repair", "Handyman", "House cleaning"],
["Computer lessons", "Computer repair", "Data recovery service"],
["Computer lessons", "House cleaning"]]));