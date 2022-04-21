function printStar(count){
    console.log('*'.repeat(count));
}

printStar(5)

// 01. Echo Function
function echo(val){
    console.log(val.length);
    console.log(val);
}

let a = 'Hello, JavaScript!';
let b = 'strings are easy';

echo(a)
echo(b)

//02. String Length
function solve(x1, x2, x3){
    let sumLength;
    let averageLength;
    sumLength = x1.length + x2.length + x3.length
    averageLength = sumLength / 3
    console.log(sumLength)
    console.log(Math.floor(averageLength))
}

solve('chocolate', 'ice cream', 'cake')
solve('pasta', '5', '22.3')

//03. Largest Number
function largest(a, b, c){
    let largest;
    if (a > b){
        if (a > c){
        largest = a;
    } else {
        largest = c}
    } else if (b > c){
        largest = b;
    } else {
        largest = c;
    }
    console.log(`The largest number is ${largest}.`)
}

function largest2(a, b, c){
    console.log(`The largest number is ${Math.max(a, b, c)}.`)
}

function largest3(...params){
    console.log(`The largest number is ${Math.max(...params)}.`)
}

largest(5, -3, 16)
largest(-3, -5, -22.5)
largest2(5, -3, 16)
largest2(-3, -5, -22.5)
largest3(5, -3, 16)
largest3(-3, -5, -22.5)

//04. Circle Area
function area(r){
    let rType = typeof r;
    if (typeof r !== "number"){
        console.log(`We can not calculate the circle area, because we receive a ${rType}.`)
    } else {
        let result = Math.PI * (r ** 2);
        console.log(result.toFixed(2))
    }
}

area(5)
area('abc')

//05. Math Operations
function arithmetic(a, b, operator){
    let result;
    switch (operator){
        case '+': result = a + b; break;
        case '-': result = a - b; break;
        case '*': result = a * b; break;
        case '/': result = a / b; break;
        case '%': result = a % b; break;
        case '**': result = a ** b; break;
    }
    console.log(result);
}

arithmetic(5, 6, '+')
arithmetic(3, 5.5, '*')

//06. Sum of Numbers N…M
function numberSum(a, b){
    let result = 0
    for (let i=Number(a); i <= Number(b); i++){
        result += i;
    }
    console.log(result)
}

numberSum('1', '5' )
numberSum('-8', '20' )

//07. Day of Week

function dayOfWeek(value){
    let result;
    switch (value){
        case 'Monday': result = 1; break;
        case 'Tuesday': result = 2; break;
        case 'Wednesday': result = 3; break;
        case 'Thursday': result = 4; break;
        case 'Friday': result = 5; break;
        case 'Saturday': result = 6; break;
        case 'Sunday': result = 7; break;
        default: result = 'error';
    }
    console.log(result)
}

dayOfWeek('Monday')
dayOfWeek('Friday')
dayOfWeek('Invalid')


// 08. Days in a month
function getDaysInMonth(month, year) {
    console.log(new Date(year, month, 0).getDate());
}

getDaysInMonth(1, 2012)
getDaysInMonth(2, 2021)


// 09.	Square of Stars
function squareOfStars(value = 5){
    let symbol = '* ';
    for  (let i=0; i < value; i++){
        console.log(symbol.repeat(value).trim());
    }
}


// 10. Aggregate Elements
function aggregateElements(x){
    let result1 = x.reduce(function(a, b){ return a + b});
    let result2 = 0;
    for (let i = 0; i < x.length; i++) {
        result2 += 1 / x[i];
    }
    let result3 = x.join('');
    console.log(result1);
    console.log(result2);
    console.log(result3);
}