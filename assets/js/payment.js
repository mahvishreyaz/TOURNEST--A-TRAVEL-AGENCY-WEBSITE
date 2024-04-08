$(document).ready(function () {

    var cardNumberRegex = /^\d{4} \d{4} \d{4} \d{4}$/;
    var expiryDateRegex = /^(0[1-9]|1[0-2]) \/ ([0-9]{2})$/;
    var cvcRegex = /^\d{3}$/;


    function validateCardHolder() {
        var cardHolder = $('#card-holder').val().trim();
        if (cardHolder === "") {
            alert('Please enter card holder\'s name.');
            return false;
        }
        return true;
    }


    function validateCardNumber() {
        var cardNumber = $('#card-number').val();
        if (!cardNumberRegex.test(cardNumber)) {
            alert('Please enter a valid card number.');
            return false;
        }
        return true;
    }


    function validateExpiryDate() {
        var currentDate = new Date();
        var expiryDate = $('#expiry-date').val();
        var parts = expiryDate.split(' / ');
        var month = parseInt(parts[0]);
        var year = 2000 + parseInt(parts[1]);

        var expiry = new Date(year, month - 1);
        expiry.setMonth(expiry.getMonth() - 1);

        if (!expiryDateRegex.test(expiryDate)) {
            alert('Please enter a valid expiry date (MM / YY).');
            return false;
        } else if (expiry <= currentDate) {
            alert('Card has expired. Please enter a valid expiry date.');
            return false;
        }
        return true;
    }


    function validateCVC() {
        var cvc = $('#cvc').val();
        if (!cvcRegex.test(cvc)) {
            alert('Please enter a valid CVC.');
            return false;
        }
        return true;
    }


    function performPayment() {

        alert('Payment successful!');
    }


    $('#pay-btn').click(function () {

        if (validateCardHolder() && validateCardNumber() && validateExpiryDate() && validateCVC()) {
            performPayment();
        }
    });
});