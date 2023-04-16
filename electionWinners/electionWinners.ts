export const electionsWinners = (votes: number[], k: number): number => votes.filter(voteCount => k - (Math.max(...votes) - voteCount) > 0).length;

console.log(electionsWinners([2, 3, 5, 2], 3));
console.log(electionsWinners([2, 3, 99, 2, 3, 5, 2], 3));