const data = require("./upwork_jobs.json"); // import the data file

let jobPostDuration = function(givenInput)
{
    let array = givenInput.Posted.split(" "); // we split the time it was posted at the spaces and enter each one into an array
    let duration = array[0]; // the duration is the first value, so its at array 0 index
    // if the posted time includes hours or hour, that means we need to convert it 
    if (givenInput.Posted.includes('hours') || givenInput.Posted.includes('hour'))
    {
        duration *= 60; // the duration which is the numerical hour value, needs to be multiplied by 60 to get minutes
    }
    return duration; // return the duration value 
}

let anotherExists = function(givenInput)
{
    let array = givenInput.Posted.split(" "); // take the input, find the posted attribute, which is where the time is stored
    let duration = array[0]; // the time it took is literally just the first value of the array at 0 index 

    // if the time includes hours or hour 
    if (givenInput.Posted.includes('hours') || givenInput.Posted.includes('hour'))
    {
        duration *= 60; // convert the duration to an hour
    }

    let secondArray = finalJob.Posted.split(" "); // we are going to find 
    let secondDuration = secondArray[0] * 60;
    if (duration == secondDuration)
    {
        return true;
    }
}

function search (data, findingAnother)
{
    let final = "";
    for (let element of data)
    {
        if (findingAnother(element))
        {
            final += element.Title + "\n";
        }
    }
    return final;
}

let finalJob = (data.reduce((a, b) => {return jobPostDuration(a) < jobPostDuration(b) ? b : a;}));
let exist = (search(data, anotherExists));
let secondOutput = "";
for(let i = 0; i < exist.length - 1; i++)
{
    secondOutput += exist[i]
}
console.log(secondOutput);