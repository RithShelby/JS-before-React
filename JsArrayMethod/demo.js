// Initial array of available seats
let availableSeats = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Array to store selected seats
let selectedSeats = [];

// Function to select seats
function selectSeat(seatNumber) {
  if (availableSeats.includes(seatNumber)) {
    selectedSeats.push(seatNumber);
    console.log(`Seat ${seatNumber} selected.`);
  } else {
    console.log(`Seat ${seatNumber} is not available.`);
  }
}

// Function to confirm booking and remove booked seats
function confirmBooking() {
  selectedSeats.forEach((seat) => {
    const index = availableSeats.indexOf(seat);
    if (index > -1) {
      availableSeats.splice(index, 1);
    }
  });
  console.log("Booking confirmed.");
  console.log("Available seats after booking: ", availableSeats);
  selectedSeats = []; // Clear the selected seats after confirmation
}

// Example usage:
selectSeat(3);
selectSeat(5);
confirmBooking(); // Should remove seats 3 and 5 from availableSeats

selectSeat(7);
confirmBooking(); // Should remove seat 7 from availableSeats
