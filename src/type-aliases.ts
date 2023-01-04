export {};

type Mojiretsu = string;

const fooString: string = "hello";
const fooMojiretsu: Mojiretsu = "hello";

const ex1 = {
  name: "yui",
  age: 26,
};

type Profile = {
  nem: string;
  age: number;
};

const ex2: Profile = {
  nem: "yui",
  age: 26,
};

type Profile2 = typeof ex1;
