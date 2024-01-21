'use strict';

const bookings = [];
const createBooking = function (flightNum, NumPassenger = 1, price = 199) {
  const booking = {
    flightNum,
    NumPassenger,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LHI123');
createBooking('LHI123', 2, 800);
createBooking('LHI123', 2);
createBooking('LHI123', undefined, 5); // if we dont set any value then we can do undefined

const flight = 'LM1234';
const fardan = {
  name: 'Fardan Kabir Chowdhury',
  passport: 213242424,
};

const checkIn = function (flightNum, Passenger) {
  //flightNum has the copy of flight
  flightNum = 'LH999';
  Passenger.name = 'Mr.' + Passenger.name;
  if (Passenger.passport === 213242424) {
    alert('check In');
  } else {
    alert('Wrong Passport');
  }
};

checkIn(flight, fardan);
console.log(flight);
console.log(fardan);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};

newPassport(fardan);
checkIn(flight, fardan);

//Js doesnt have passing by reference, just have Passing by Values
