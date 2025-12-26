//Exercise 06 - repeatString
// source :- https://github.com/TheOdinProject/javascript-exercises/tree/main/foundations/


// Exercise 06 - repeatString

function repeatString(str,n){
    
    if(n < 0){
         ("Error");

    }
    let value = [];
    for(let i = 0; i < n; i++){
        value.push(str);
    }
    return value.join('');
}
 (repeatString('hey', 3)) // returns 'heyheyhey'

// function 2

function repeatString2(str,n){
    if(n < 0){
         ("Error");
    }
    let string = "";
    for(let i = 0; i < n; i++){
        string += str;
    }
    return string;
}

 (repeatString2('hey', 3))

//Exercise 07 - Reverse a String

function reverseString(str){
    let value = str.split('');
     (value);
   for(let i = 0; i < str.length/ 2; i++){
    let temp = value[i];
    value[i] = value[value.length - i - 1];
    value[value.length - i - 1] = temp;
   }
   return value; 
}



// function 2
function reverseString1(str){
let str1 = "";
for(let i = str.length - 1; i >= 0 ; i--){
    str1 += str[i];
}
return str1;
}


// function 3
function reverseString2(str){
    return str
    .split('')
    .reverse()
    .join('');
}

 reverseString('hello their')
 reverseString1('hello their')
 reverseString2('hello their')


//Exercise 08 - removeFromArray

function removeFromArray(arr,a){
    return arr
    .filter(x => x != a);
}

function remove(arr,a){
    let array = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== a){
            array.push(arr[i])
        }
    }
    return array;
}



 (removeFromArray([1, 2, 3, 4], 3));

//Exercise 09 - sumAll

function sumAll(a,b){
    let sum = 0;
    if(!(Number.isInteger(a) || Number.isInteger(b)))return "error";
    if(a < b){
        for(let i = a; i <= b; i++){
            sum += i;
        }
    }
    else{
       for(let i = b; i <= a; i++){
            sum += i;
        } 
    }
    return sum;
}




// Exercise 10 - leapYears
function leapYear(year){
    return (year % 4 == 0  && year % 100 !== 0) || (year % 400 === 0) ? 'is a leap year' : 'is not a leap year';
    
}
 //function 2 from TOP
let leapYears = function(year){
    return year % 4 === 0 && (year % 400 === 0 || year % 100 !== 0) ? true : false; 
}

// Exercise 11 - tempConversion

function convertToCelsius(Tf){
    return 5/9 * (Tf - 32);
}
function convertToFahrenheit(Tc){
    return (9/5 * Tc) + 32;
}
