export const htmlEndTagByStartTag = (startTag: string): string => `</${startTag.split(' ').find(each => /^<[a-z]/.test(each))?.substring(1)}>`.replace('>>', '>');
// Interesting approach with another kind of regex :)
console.log(htmlEndTagByStartTag("<button type='button' disabled>"));
console.log(htmlEndTagByStartTag('<i>'));
console.log(htmlEndTagByStartTag('test <i>'));