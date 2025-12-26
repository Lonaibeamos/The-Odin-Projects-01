# Exercise 06 - repeatString
# Repeat a string 'str' n times

function repeatString(str, n)
    if n < 0
        return "Error"
    initialize empty array value
    loop i from 0 to n-1
        push str into value
    return joined value as a string

function repeatString2(str, n)
    if n < 0
        return "Error"
    initialize empty string result
    loop i from 0 to n-1
        append str to result
    return result

# Example:
# repeatString('hey', 3) -> 'heyheyhey'

# Exercise 07 - reverseString
# Reverse a string

function reverseString(str)
    split str into array value
    loop i from 0 to length/2
        swap value[i] with value[length-i-1]
    return joined value

function reverseString1(str)
    initialize empty string result
    loop i from end of str to start
        append str[i] to result
    return result

function reverseString2(str)
    return str split into array, reversed, and joined

# Exercise 08 - removeFromArray
# Remove element 'a' from array 'arr'

function removeFromArray(arr, a)
    return arr filtered by x != a

function remove(arr, a)
    initialize empty array result
    loop through arr
        if arr[i] != a
            push arr[i] to result
    return result

# Exercise 09 - sumAll
# Sum all integers between a and b inclusive

function sumAll(a, b)
    if a or b not integer
        return "error"
    initialize sum = 0
    loop i from min(a, b) to max(a, b)
        sum += i
    return sum

# Exercise 10 - leapYears
# Check if a year is a leap year

function leapYear(year)
    if (year divisible by 4 AND not divisible by 100) OR divisible by 400
        return "is a leap year"
    else
        return "is not a leap year"

function leapYears(year)
    return true if (year divisible by 4 AND (divisible by 400 OR not divisible by 100))
    else return false

# Exercise 11 - tempConversion
# Convert temperature between Celsius and Fahrenheit

function convertToCelsius(Tf)
    return 5/9 * (Tf - 32)

function convertToFahrenheit(Tc)
    return (9/5 * Tc) + 32
