export {};

// const nextYearSalary = (currentSalary: number, rate: number = 1.1) => {
//   return currentSalary * rate
// }

// console.log(nextYearSalary(1000))


const reducer = (accumulator:number, currentValue:number) => {
  console.log({accumulator, currentValue})
  return accumulator + currentValue
}

const sum: (...values: number[]) => number = (...values: number[]): number => {
  values.reduce(reducer)
  // console.log(values)
  return 100;
}

// sum(1, 2, 3, 4, 5);

// [1, 2, 3, 4].reduce(reducer)
