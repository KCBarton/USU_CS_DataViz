// Initializing all the lists used
let x_values = [];
let y_values = [];
let operator_values = [];
let answer_values = [];
let answer_values2 = [];

// So long as the user pushes the OK button, these prompts are displayed in the loop
do {
    x_values.push(prompt("Please enter x value", ""));
    operator_values.push(prompt("Please enter operator value", ""));
    y_values.push(prompt("Please enter y value", ""));
}

// Condition: so long as user pushes Continue?, do the above
while (confirm("Continue?") == true);

// For loop
for (let i = 0; i < x_values.length; i++) {

    // If either of the x or y values are not a number, result = wrong input number
    if (isNaN(x_values[i]) || isNaN(y_values[i])) {
        answer_values.push('Wrong input number');
    }

    // If the operator is not from one of the following, result = computation error
    else if (!(['+', '-', '*', '/', '%'].includes(operator_values[i]))) {
        answer_values.push('Computation error');
    }

    else{
        // If all is good, evaluates the result
        answer_values.push(eval(parseInt(x_values[i]) + operator_values[i] + parseInt(y_values[i])));
    }
}

// Writes inputs to a document
document.write("<table>");

// This is the heading
document.write("<tr><th>x</th><th>Operator</th><th>y</th><th>Result</th></tr>");

// For loop
for (let i = 0; i < x_values.length; i++) {

    // If the answer is not a number, display the text of answerValues
    if (isNaN(answer_values[i])) {
        document.write("<tr><td style=\"text-align:center\">" + x_values[i] + " </td><td style=\"text-align:center\">" + operator_values[i] + " </td><td style=\"text-align:center\">" + y_values[i] + " </td><td style=\"text-align:center\"> " + answer_values[i] + " </td></tr>");
    } else {

        // If the answer is a number, display the integer of answerValues
        document.write("<tr><td style=\"text-align:center\">" + parseInt(x_values[i]) + " </td><td style=\"text-align:center\">" + operator_values[i] + " </td><td style=\"text-align:center\">" + parseInt(y_values[i]) + " </td><td style=\"text-align:center\"> " + parseInt(eval(answer_values[i])) + " </td></tr>");
    }
}
document.write("</table>");




// second table
document.write("<table>");

// This is the heading of the second table
document.write("<tr><th>x</th><th>Operator</th><th>y</th><th>Result</th></tr>");

// For loop
for (let i = 0; i < answer_values.length; i++) {

    // If answer_values is not a number, do nothing
    if (isNaN(answer_values[i])) {

    } else {

        // If answer_values is a number, write values to table (excludes errors
        document.write("<tr><td style=\"text-align:center\">" + parseInt(x_values[i]) + " </td><td style=\"text-align:center\">" + operator_values[i] + " </td><td style=\"text-align:center\">" + parseInt(y_values[i]) + " </td><td style=\"text-align:center\"> " + parseInt(eval(answer_values[i])) + " </td></tr>");
    }
}

// For loop
for (let i = 0; i < x_values.length; i++) {

    // If answer_values is not a number, do nothing
    if (isNaN(answer_values[i])) {

    } else {

        // If answer_values is a number, append value to answer_values2 list
        answer_values2.push(answer_values[i]);
    }
}

// Initializes values
let average = 0;
let total = 0;

// For loop
for ( let i = 0; i < answer_values2.length; i++ ) {

    // Sums all the values in answer_values2
    total = total + answer_values2[i];
}

// Finds the average of anser_values2
average = total/answer_values2.length;

// Second heading on second table
document.write("<tr><th>Min</th><th>Max</th><th>Average</th><th>Total</th></tr>");

// Writes the min, max, average and sum
document.write("<tr><td style=\"text-align:center\">" + Math.min.apply(Math, answer_values2) + " </td><td style=\"text-align:center\">" + Math.max.apply(Math, answer_values2) + " </td><td style=\"text-align:center\">" + average + " </td><td style=\"text-align:center\"> " + total + " </td></tr>");
document.write("</table>");