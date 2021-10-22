function getInputValue() {

    // Only lowercase and numbers. Between 4-12 characters long.
    let input_username = document.getElementById("input_username").value;
    let res_username = /^([a-z0-9]{4,12})$/m.exec(input_username);
    let list = [];

    //alert(res_username);


    if (input_username.length == '0') {
        list.push('Please Enter ' + 'Username'.fontcolor('red'));
    }

    if ((input_username.length != '0') && (res_username == null)) {
        list.push('Please Enter ' + 'A Valid Username'.fontcolor('yellow'));
    }



    // Should contain @ and end in .net, .com, .org or .edu
    let input_email = document.getElementById("input_email").value;
    let res_email = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.exec(input_email);

    if (input_email.length == '0') {
        list.push('Please Enter ' + 'Email'.fontcolor('red'));
    }

    if ((input_email.length != '0') && (res_email == null)) {
        //document.getElementById('output').innerHTML = 'Please enter (VALID EMAIL in yellow)';
        list.push('Please Enter ' + 'A Valid email'.fontcolor('yellow'));
    }


    // Should be 10 digits and contain hyphens
    let input_phone = document.getElementById("input_phone").value;
    let res_phone = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/.exec(input_phone);

    if (input_phone.length == '0') {
        list.push('Please Enter ' + 'Phone'.fontcolor('red'));
    }

    if ((input_phone.length != '0') && (res_phone == null)) {
        list.push('Please Enter ' + 'A Valid Phone Number'.fontcolor('yellow'));
    }

    // These 2 passwords need to be the same
    let input_password = document.getElementById("input_password").value;
    let input_password2 = document.getElementById("input_password2").value;

    if (input_password.length == '0') {
        list.push('Please Enter ' + 'Password'.fontcolor('red'));
    }

    if (input_password2.length == '0') {
        list.push('Please Re-enter ' + 'Password'.fontcolor('yellow'));
    }

    if (input_password !== input_password2) {
        alert("The passwords do not match!");
        list.push('Please Re-enter ' + 'Passwords'.fontcolor('yellow'));
    }

    // Gender
    let input_male = document.getElementById("input_male").checked;
    let input_female = document.getElementById("input_female").checked;

    if ((input_male == false) && (input_female == false)) {
        list.push("Please Select " + 'A Gender'.fontcolor('Red'));
    }

    // Birthday
    let input_month = document.getElementById("input_month").value;
    let input_day = document.getElementById("input_day").value;
    let input_year = document.getElementById("input_year").value;

    if (input_month == '' || input_day == '' || input_year == '') {
        list.push("Please Select " + 'Birthday'.fontcolor('red'));
    }


// If there are errors, display text errors underneath
    if (list.length != 0) {
        document.getElementById('output').innerHTML = list.join('<br>' + '<br>');
    }
// If there are no input errors, redirect to github page
    else {
        window.open("https://kcgubler.github.io/");
    }
  //  alert(input_month == '');
}

function clearInputs() {

    list = [];

    if (list.length == 0) {
        document.getElementById('output').innerHTML = list.join('<br>' + '<br>');
    }

}