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
