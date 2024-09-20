/*
    Danyelle Palmore
    COMP 322
    09/19/2024
    This is the Javascript portion of my program that calculates all of the values, 
    creates the table, and displays the tabl based on different inputs
*/

let results = []; //results for summary calculation

//initial pop up
alert("Welcome to my calculator\n Hope it caluculates :)");

//sets while loop
boolean = true;

//calculate min, max, avg, and total for finishing operation
function calculateSummary(validResults) {
    let min = Math.min(...validResults);
    let max = Math.max(...validResults);
    //takes array and combines all elements into single value
    let total = validResults.reduce((acc, num) => acc + num, 0);            //what does this do?
    let avg = total / validResults.length;
    return {min, max, avg, total};
}

//table to display results of above
document.write("<table border = '6' width='200'>"); 
document.write("<tr><th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr>"); 


while(boolean){
    //prompt for x value
    let x = prompt("Please enter your first value (x): ");
    if (x== null){ //exit/stops loop when cancel is clicked or no value is inputted
        //boolean=false;
        break;
    //checks if it is a number
    } if (isNaN(x)){
        alert("Please enter a number.");
        document.write("<tr><td>"+x+"</td><td></td><td>Invalid input for x</td></tr>"); //display error message
        continue;
    }
    x = parseFloat(x); //convert string into floating point number

    //same as above but with y
    let y = prompt("Please enter your second number (y): ");
    if (y== null){
        //boolean=false;
        break;
    } if (isNaN(y)){
        alert("Please enter a number, start with the x value");
        document.write("<tr><td>"+y+"</td><td></td><td>Invalid input for y</td></tr>");
        continue;
    } y = parseFloat(y);

    let operator = prompt("Please enter an operator (+, -, *, /): ");
    if (operator == null){ //cancel/no value is entered
        break;
    }

    let result;
    switch(operator){
        case '+':
            result = x+y;
            break;
        case '-':
            result =x-y;
            break;
        case '*':
            result = x*y;
            break;
        case '/':
            result = y!= 0?x/y: 'Cannot divide by 0';
            break;
        default:
            result = "Invalid operator";
    }
    document.write("<tr><td>"+x+"</td><td>"+operator+"</td><td>"+y+"</td><td>"+result+"</td></tr>");

    if(typeof result == 'number'){
        results.push(result); //add to summary 
    }
}
    document.write("</table>");     //end of main table

    //calculate summary if valid result
if(results.length > 0){
        let summary = calculateSummary(results);
        //summary table
        document.write("<h2>Summary</h2>");
        document.write("<table>");
        document.write("<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>");
        document.write("<tr><td>" + summary.min + "</td><td>"+ summary.max + "</td><td>" + summary.avg.toFixed(2) + "</td><td>" + summary.total+"</td></tr>");
        document.write("</table>");
    } else {
        document.write("<p> Novalid results to display</p>");
    }



//     let myBoolean = confirm("Ok == True \n Cancel == Failse");
//     //cancel (false) will exit out of loop
//     console.log(myBoolean);

//     let arithmeticOperator = prompt("Please enter an arithmetic operator ");
//     //if null then return false
//     if (arithmeticOperator){
//         console.log(arithmeticOperator);
//     } else {
//         console.log("Did not log input");
//     }
//     //if user presses cancel null will return false and we want to tell user to type operator
// }


// document.write("<tr><td> + x + </td><td> + operator + </td><td> + y + </td><td> + result + </td></tr>"); 



