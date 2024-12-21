const seatsContainer = document.querySelector('.seats');
const selectedSeatsList = document.getElementById('selected-seats-list');
const confirmButton = document.getElementById('confirm-button');

// Define rows and seats
const rows = ['A', 'B', 'C', 'D', 'E'];
const seatsPerRow = 10;
const occupiedSeats = [
    'A1', 'A2', 'B5', 'C3', 'D7' // Example of occupied seats
];

// Define price per seat
const pricePerSeat = 1000;

// Generate seats
rows.forEach(row => {
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');

    for (let i = 1; i <= seatsPerRow; i++) {
        const seat = document.createElement('div');
        seat.classList.add('seat');
        seat.dataset.index = `${row}${i}`; // e.g., A1, B2, etc.

        // Mark occupied seats
        if (occupiedSeats.includes(seat.dataset.index)) {
            seat.classList.add('occupied');
            seat.title = "Occupied";
        } else {
            seat.addEventListener('click', () => {
                seat.classList.toggle('selected');
                updateSelectedSeats();
            });
        }

        rowDiv.appendChild(seat);
    }

    seatsContainer.appendChild(rowDiv);
});

// Update selected seats list and total price
function updateSelectedSeats() {
    const selectedSeats = document.querySelectorAll('.seat.selected');
    selectedSeatsList.innerHTML = ''; // Clear the list

    selectedSeats.forEach(seat => {
        const seatIndex = seat.dataset.index;
        const listItem = document.createElement('li');
        listItem.textContent = `Seat ${seatIndex}`; // Display seat number
        selectedSeatsList.appendChild(listItem);
    });

    // Calculate total price
    const totalPrice = selectedSeats.length * pricePerSeat;
    const totalPriceElement = document.getElementById('total-price');
    totalPriceElement.innerHTML = `Total Price: <strong>Rs ${totalPrice}</strong>`; // Update total price display with bold text
}

// Confirm selection
confirmButton.addEventListener('click', () => {
    const selectedSeats = document.querySelectorAll('.seat.selected');
    if (selectedSeats.length > 0) {
        const seatNumbers = Array.from(selectedSeats).map(seat => seat.dataset.index).join(', ');
        const totalPrice = selectedSeats.length * pricePerSeat; // Calculate total price
        alert(`You have selected the following seat(s): ${seatNumbers}\nTotal Price: Rs ${totalPrice}`);
        
        // Redirect to payment page with total price as a URL parameter
        window.location.href = `payment.html?totalPrice=${totalPrice}`;
    } else {
        alert('No seats selected.');
    }
});