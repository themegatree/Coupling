const test = require('../test-framework.js')
const move = require('../src/move.js')

const Skateboard = require('../src/skateboard.js');
const Car = require('../src/car.js');
const Plane = require('../src/plane.js');
const SpaceShip = require('../src/spaceship.js');
//const { assertEquals } = require('../test-framework.js');

let result;

//---------------------------------------------------------
/*console.log("move()")
test.it("Skateboard", function() {
  test.assertEquals(move(new Skateboard()), "moved 100m");
})*/

const mySkateboard = new Skateboard()

if (move(mySkateboard) === "moved 100m") {
  result = true;
}
else {
  result = false;
}
console.log(result)


//---------------------------------------------------------

/*test.it("Car", function() {
  test.assertEquals(move(new Car()), "moved 1000m");
})*/

const myCar = new Car()

if (move(myCar) === "moved 1000m") {
  result = true;
}
else {
  result = false;
}

console.log(result)

//---------------------------------------------------------

// test.it("Plane", function() {
//   test.assertEquals(move(new Plane()), "moved 10000m");
// })

const myPlane = new Plane()

if (move(myPlane) === "moved 10000m") {
  result = true;
}
else {
  result = false;
}

console.log(result)

//---------------------------------------------------------

//test.it("SpaceShip", function() {
 // test.assertEquals(move(new SpaceShip()), "moved 100000m");
//})

const mySpaceShip = new SpaceShip()

if (move(mySpaceShip) === "moved 100000m") {
  result = true;
}
else {
  result = false;
}

console.log(result)