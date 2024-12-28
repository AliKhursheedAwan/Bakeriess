document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function () {
        const cakeName = this.getAttribute('data-cake');
        const quantity = prompt(`How many ${cakeName}s would you like to add to the cart?`);
        if (quantity && !isNaN(quantity) && quantity > 0) {
            alert(`${quantity} ${cakeName}(s) added to the cart.`);
        } else {
            alert('Please enter a valid quantity.');
        }
    });
});



