# TOP Questions - Array Methods
# source: https://javascript.info/array-methods#tasks

# Exercise: Camelize a string
# Convert dash-separated string to camelCase
function camelize(str)
    split str by '-'
    map each item with index:
        if index == 0 -> keep item as is
        else -> capitalize first letter and append rest
    join all items and return
# Examples:
# camelize("background-color") -> "backgroundColor"
# camelize("list-style-image") -> "listStyleImage"
# camelize("-webkit-transition") -> "WebkitTransition"

# Exercise: Filter range
# Return a new array with elements between a and b inclusive
function FilterRange(arr, a, b)
    return arr filtered where x >= a and x <= b
# Example:
# FilterRange([5,3,8,1], 1,4) -> [3,1]

# Exercise: Filter range "in place"
# Remove elements outside a..b from the original array
function filterRangeInPlace(arr, a, b)
    loop i from 0 to arr.length-1
        if arr[i] < a or arr[i] > b
            remove arr[i] (splice)
            decrease i by 1
# Example:
# arr = [5,3,8,1]
# filterRangeInPlace(arr, 1, 4) -> arr = [3,1]

# Exercise: Sort in decreasing order
# Sort an array descending
arr.sort descending by (b - a)
# Example:
# [5,2,1,-10,8] -> [8,5,2,1,-10]

# Exercise: Copy and sort array
function copyAndSortArray(arr)
    return shallow copy of arr sorted alphabetically
# Example:
# ["HTML","JavaScript","CSS"] -> ["CSS","HTML","JavaScript"]

# Exercise: Shuffle an array (simple)
function shuffle(array)
    sort array randomly using Math.random() - 0.5

# Exercise: Shuffle an array (Fisher-Yates)
function fisherYates_or_knutch_Shuffle(array)
    loop i from array.length-1 down to 1
        pick random j between 0 and i
        swap array[i] and array[j]

# Exercise: Filter unique array members
function unique(array)
    initialize empty result array
    loop through array
        if item not in result
            push item to result
    return result

function uniqueMembers(array)
    return array filtered where indexOf(item) == current index
# Both functions return an array of unique elements

# Examples:
# ["Hare", "Krishna", "Hare"] -> ["Hare","Krishna"]
