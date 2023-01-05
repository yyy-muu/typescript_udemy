export {};

let bmi: (weight: number, height: number, printable?: boolean) => number = (
  weight: number, height: number, printable?: boolean
): number => {
  const bmi: number = weight / (height * height)
  if (printable) {
    console.log({bmi})
  }
  return bmi
}


console.log(bmi(156, 45, true))
console.log(bmi(156, 45, false))
