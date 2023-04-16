export const fareEstimator = (ride_time: number, ride_distance: number, cost_per_minute: number[], cost_per_mile: number[]): number[] => cost_per_minute.map((minCost, index) => +(ride_time * minCost + ride_distance * cost_per_mile[index]).toFixed(1));

console.log(fareEstimator(30, 7, [0.2, 0.35, 0.4, 0.45], [1.1, 1.8, 2.3, 3.5]));
