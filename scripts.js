function calculateTotal() {
    const checkin = new Date(document.getElementById('checkin').value);
    const checkout = new Date(document.getElementById('checkout').value);
    const guests = document.getElementById('guests').value;
    const roomType = document.getElementById('roomType').value;

    const nights = (checkout - checkin) / (1000 * 60 * 60 * 24);

    let roomPricePerNight;
    if (roomType === 'standard') {
        roomPricePerNight = 100000;
    } else if (roomType === 'deluxe') {
        roomPricePerNight = 150000;
    } else if (roomType === 'suite') {
        roomPricePerNight = 250000;
    }

    const totalPrice = nights * roomPricePerNight;

    document.getElementById('totalPrice').innerText = `Total Price: ${totalPrice.toLocaleString()} KRW`;
}

document.addEventListener('DOMContentLoaded', () => {
    const dateInputs = document.querySelectorAll('input[type="text"][placeholder="YYYY-MM-DD"]');
    dateInputs.forEach(input => {
        input.addEventListener('focus', (event) => {
            event.target.type = 'date';
        });
        input.addEventListener('blur', (event) => {
            if (!event.target.value) {
                event.target.type = 'text';
            }
        });
    });
});
