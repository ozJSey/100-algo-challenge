export const reflectString = (inputString: string): string => inputString.split('').map((e, i) => ['z', 'y', 'x', 'w', 'v', 'u', 't', 's', 'r', 'q', 'p', 'o', 'n', 'm', 'l', 'k', 'j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a'][e.charCodeAt(0) - 97]).join('')

console.log(reflectString("name"));
