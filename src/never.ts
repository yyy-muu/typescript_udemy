export {};

// 呼び元に戻ってこない
const error = (message: string): never => {
  throw new Error(message)
}

try {
  let result = error('test');
  console.log({result})
} catch (error) {
  console.log({error})
}

let foo: void = undefined;
// let bar: never = undefined;
