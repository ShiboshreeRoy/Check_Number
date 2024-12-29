document.getElementById("btn").addEventListener("click", function () {
    const userInput = document.getElementById('myInput').value.trim();

    // Validate input to ensure it's a number
    if (isNaN(userInput) || userInput === "") {
        document.getElementById('demo').innerHTML = 'Please enter a valid number!';
        return;
    }

    const number = parseFloat(userInput); // Convert string to number for comparison

    if (number === 0) {
        document.getElementById('demo').innerHTML = 'Zero';
    } else if (number > 0) {
        document.getElementById('demo').innerHTML = 'Positive number';
    } else {
        document.getElementById('demo').innerHTML = 'Negative number';
    }
});
