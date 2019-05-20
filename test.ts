const enum Directions {
  Up,
  Down
}

const enum Some {
  One = 1,
  Two = Directions.Down // Error. Cannot convert type 'Directions' to type 'Some'
}

let val = Some.One == Directions.Up;
