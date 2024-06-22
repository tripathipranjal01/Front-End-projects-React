document.addEventListener("DOMContentLoaded", function () {
    const paymentOption = document.getElementById("paymentOption");
    const creditCardSection = document.getElementById("creditCardSection");

    paymentOption.addEventListener("change", function () {
        if (paymentOption.value === "creditCard") {
            creditCardSection.style.display = "block";
        } else {
            creditCardSection.style.display = "none";
        }
    });

    const registrationForm = document.getElementById("registrationForm");
    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault();
        // Add form submission logic and payment processing here
        alert("Form submitted successfully!");
    });
});
