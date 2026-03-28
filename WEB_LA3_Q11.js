function calculateSI(p, r, t) {
    var interest = (p * r * t) / 100;
    return interest;
}

function displaySI() {
    var p = parseFloat(document.getElementById("principal").value);
    var r = parseFloat(document.getElementById("rate").value);
    var t = parseFloat(document.getElementById("time").value);
    var output = document.getElementById("result");

    if (isNaN(p) || isNaN(r) || isNaN(t)) {
        output.innerHTML = "Please enter all values.";
        return;
    }

    var result = calculateSI(p, r, t);
    output.innerHTML = "Interest: ₹ " + result.toFixed(2);
}