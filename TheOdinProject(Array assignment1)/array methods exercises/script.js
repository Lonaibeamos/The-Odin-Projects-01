/*                TOP questions 
source:- https://javascript.info/array-methods#tasks   */



//function Translate border-left-width to borderLeftWidth

function camelize(str){
    return str.
    split('-')
    .map((item,index) => index == 0 ? item : item[0].toUpperCase() + item.slice(1))
    .join('');
}

 (camelize("background-color") == 'backgroundColor');
 (camelize("list-style-image") == 'listStyleImage');
 (camelize("-webkit-transition") == 'WebkitTransition');

//Filter range


let arr = [5, 3, 8, 1];

let filtered = FilterRange(arr, 1, 4);


function FilterRange(arr,a,b){
 return arr.
 filter(x => (x >= a && x <= b));  
};

 (filtered);

 (arr);

//Filter range "in place"
function filterRangeInPlace(arr, a, b){
        for(let i = 0; i < arr.length; i++){
        if((arr[i] < a || arr[i] > b)){
           arr.splice(i,1);
           i--;
        }
    }
}

filterRangeInPlace(arr, 1, 4);
 (arr);


//Sort in decreasing order
/* 
arr.sort((a, b) => a - b)  // ascending
arr.sort((a, b) => b - a)  // descending
*/


let arr1 = [5, 2, 1, -10, 8];
arr1.sort((item1,item2) => item2 - item1);
 (arr1);



//Copy and sort array


let arr2 = ["HTML", "JavaScript", "CSS"];

let Sorted = copyAndSortArray(arr2);

function copyAndSortArray(arr2){
    return arr2.slice().sort();
}

 (Sorted);
 (arr2);

//Shuffle an array
//using simple js function
let arr3 = [1, 2, 3];
function shuffle(array){
    return array.
    sort(() => Math.random() - 0.5);
}

shuffle(arr3);
 (arr3);

//



//using normal function

function toShuffle(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(i == j)continue;
            for(let k = 0; k < arr.length; k++){
                if(k == i || k ==j)continue;
               ([arr[i],arr[j],arr[k]]) //= [arr[j],arr[i]]);
            }
        }
    }
}
toShuffle(arr3);

// using fisher-yates / knutch function

function fisherYates_or_knutch_Shuffle(array){
    for(let i = array.length - 1 ; i > 0; i--){
        let j = Math.floor(Math.random() * (i + 1));
       [array[i],array[j]] = [array[j],array[i]];
    }
}
let arr4 = [1, 2, 3];
fisherYates_or_knutch_Shuffle(arr4);
 (` :- ${arr4}`);

//Filter unique array members
function unique(array){
let result = [];
for(let i = 0; i < array.length; i++){
    if(!result.includes(array[i])){
        result.push(array[i]);
    }
}
return result;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"];
strings = unique(strings);
 (strings)




function uniqueMembers(array){
    return array.
    filter((item,index) => {
      return  array.indexOf(item) === index });
}

let eazyUnique = uniqueMembers(strings);
 (eazyUnique)


