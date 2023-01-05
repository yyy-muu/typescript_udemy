export {};

// let bmi = function (height:number, weight:number):number {
//   return weight / (height * height)
// }

// console.log(bmi(156, 45))

let bmi = (height: number, weight:number):number => {
  return weight / (height*height)
}

console.log(bmi(156, 45))
