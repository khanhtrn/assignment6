$(document).ready(function () {
    $("#submit").click(function () {
        var fullname = document.getElementById('inputFullName').value;
        var fulladdress = document.getElementById('inputAddress').value;
        var fullcity = document.getElementById('inputCity').value;
        var fullstate = document.getElementById('inputState').value;
        var fullzipcode = document.getElementById('inputZipCode').value;
        var fulltelnum = document.getElementById('inputTelNumber').value;
        var emailregex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        var fullemail = document.getElementById('inputEmail').value;
        if (!isNaN(fullname)); {
            window.alert("Please input a name without other character or number");
        } else if (!fulladdress.match(/\d/g)) {
            window.alert("Please input a correct address");
        } else if (!fullcity.match(/\w/g)) {
            window.alert("Please input a correct city");
        } else if (!fullstate.match(/\w{2}/g)) {
            window.alert("Please enter only 2 letter for state");
        } else if (!fullzipcode.match(/\d{5}/g)) {
            window.alert("Please enter only 5-digit for zip code")
        } else if (!fulltelnum.match(/\d{3} (-\d{3}) (-\d{4})?/)) {
            window.alert("Please enter your telephone number in this format 123-456-7890");
        } else if (!emailregex.test(fullemail)) {
            window.alert("Please enter a valid email format");
            return false;
        }
    });
});