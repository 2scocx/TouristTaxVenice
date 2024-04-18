document.getElementById("arrival").addEventListener("change", updateNumberOfNights);
document.getElementById("checkout").addEventListener("change", updateNumberOfNights);

function updateNumberOfNights() {
    var arrivalDate = new Date(document.getElementById("arrival").value);
    var checkoutDate = new Date(document.getElementById("checkout").value);

    if (!isNaN(arrivalDate.getTime()) && !isNaN(checkoutDate.getTime())) {
        var timeDifference = checkoutDate.getTime() - arrivalDate.getTime();
        var totalNights = Math.ceil(timeDifference / (1000 * 3600 * 24));
        document.getElementById("nights").value = totalNights;
    }
}

document.getElementById("calculateButton").addEventListener("click", function() {
    var button = document.getElementById("calculateButton");
    button.classList.add("bobbing");
    button.classList.add("green");

    setTimeout(function() {
        button.classList.remove("bobbing");
        button.classList.remove("green");
    }, 800);

    calculate();
});

function calculate() {
    var adults = document.getElementById("adults").value !== '' ? parseInt(document.getElementById("adults").value) : 0;
    var children10_15 = document.getElementById("children10_15").value !== '' ? parseInt(document.getElementById("children10_15").value) : 0;
    var children_lt_10 = document.getElementById("children_lt_10").value !== '' ? parseInt(document.getElementById("children_lt_10").value) : 0;
    var nights = document.getElementById("nights").value !== '' ? parseInt(document.getElementById("nights").value) : 1;

    var totalAdults = adults * 4;
    var totalChildren10_15 = children10_15 * 2;
    var totalChildren_lt_10 = 0;

    var total = totalAdults + totalChildren10_15 + totalChildren_lt_10;
    var totalNights = 0;

    var arrival = new Date(document.getElementById("arrival").value);
    var checkout = new Date(document.getElementById("checkout").value);

    if (!isNaN(arrival.getTime()) && !isNaN(checkout.getTime())) {
        var timeDifference = checkout.getTime() - arrival.getTime();
        totalNights = Math.ceil(timeDifference / (1000 * 3600 * 24));
    } else {
        totalNights = nights;
    }

    var nightsForTax = Math.min(totalNights, 5);

    var totalAmount = total * nightsForTax;

    var result = document.getElementById("result");
    result.innerHTML = "Total City Tax for " + totalNights + " nights: " + totalAmount + " euro. Enjoy your stay!!";
}

document.getElementById("calculateButton").addEventListener("click", function() {
    document.querySelector('.background').classList.toggle('background1');
    document.querySelector('.background').classList.toggle('background2');
});
