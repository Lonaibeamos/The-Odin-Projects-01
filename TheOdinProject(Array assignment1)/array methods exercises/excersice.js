// Translate border-left-width to borderLeftWidth

function camelize(str){
    return str
    .split('-')
    .map((item,index) => index === 0 ? item : item[i].toUpperCase() + item.slice(1))
    .join('');
}

// Filter range
let newArray = [];
function FilterRange(arr,a,b){
    for(let i = 0; i < arr.length; i++){
        if(a <= arr[i] && b >= arr[i]){
            newArray.push(arr[i]);
        }
    }
}

// or

function filterRange(arr,a,b){
    return arr
    .filter(x => x >= a && x <= b)
}



// Filter range "in place"
function filterRangeInPlace(arr, a, b){
    for(let i = 0; i < arr.length; i++){
        if(b < arr[i] || a > arr[i]){
            arr.splice(i,1);
            i--;
        }
    }
}



//Sort in decreasing order

function decreasingOrder(arr){
    return arr
    .sort((item1 , item2) => item2 - item1);
}
//or
function decreasing_order(a,b){
    if(b < a){
        return -1 // Swap places (decreasing order)
    }
    if( a == b){
        return 0; // doesnt matter if you swap or not
    }
    if( a < b){
        return 1; // No Swapping places
    }
}

// Copy and sort array

function copyAndSortArray(arr){
    return arr.slice().sort();
}
let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copyAndSortArray(arr);



//function 2
let copy = [];
function copySorted(arr){
for(let i = 0; i < arr.length; i++){
    copy.push(arr[i]);
}
copy.sort();

return copy;
}


//Filter unique array members

function unique(arr){
    return arr
    .filter((item,index) => {
     return arr.indexOf(item) === index
});
}


//function 2
let toPush = [];
function unique1(arr){
    for(let i = 0 ; i < arr.length; i++){
        if(!toPush.includes(arr[i])){
            toPush.push(arr[i]);
        }
    }
    return toPush;
}
