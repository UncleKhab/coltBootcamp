function multiply(die1, die2)
{
    return(die1 * die2);
}

function isShortsWeather(num)
{
    if(num >= 75)
    {
        return true;
    }
    return false;
}

function lastElement(arr)
{
    if(arr.length === 0) return null;
    return arr[arr.length-1];
}

function capitalize(str)
{
    return str.slice(0,1).toUpperCase() + str.slice(1);
}

function sumArray(arr)
{
    let sum = 0;
    for(let item of arr)
    {
        sum+= item;
    }
    return sum;
}

function returnDay(num)
{   
    
    const obj = {
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday",
        7: "Sunday"
    }
    if(num > 7) return null;
    return obj[num];
}
const obj = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    7: "Sunday"
}
