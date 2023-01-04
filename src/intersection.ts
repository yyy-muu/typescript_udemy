export {};

type Pitcher1 = {
  throwingSpeed: number
}

type Batter1 = {
  battingAverage: number;
}

const DaimajinSasaki: Pitcher1 = {
  throwingSpeed: 154
};

const OchiaiHiromitsu: TwoWayPlayer = {
  battingAverage: 0.367,
  throwingSpeed: 145
}

// type TwoWayPlayer = {
//   battingAverage: number,
//   throwingSpeed: number
// }
type TwoWayPlayer = Pitcher1 & Batter1

const OhtaniShohei: TwoWayPlayer = {
  throwingSpeed: 150,
  battingAverage: 0.286
}
