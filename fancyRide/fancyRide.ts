const rideTypes = ["UberX", "UberXL", "UberPlus", "UberBlack", "UberSUV"]
const FIRST_USE_DISCOUNT = 20;

export const fancyRide = (l: number, fares: number[]): any => fares.map((fare, i) => ({
  pay: (l * fare) - FIRST_USE_DISCOUNT,
  rideType: rideTypes[i]
})).filter(ride => ride.pay < 0).sort((a, b) => a.pay - b.pay).reverse()?.[0].rideType;

console.log(fancyRide(30, [0.3, 0.5, 0.7, 1, 1.3]));