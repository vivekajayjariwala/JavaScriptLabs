const kraggle = require('./upwork_jobs.json')

let timeConversion = function(jobs){
    let array = jobs.Posted.split(" "); 
    let duration = array[0]; 
    if (jobs.Posted.includes("hours") || jobs.Posted.includes("hour")){
        duration *= 60; 
    }
    return duration; 
}

let anotherExists = function(jobs){
    let array = jobs.Posted.split(" "); 
    let duration = array[0]; 
    if (jobs.Posted.includes("hours") || jobs.Posted.includes("hour")){
        duration *= 60; 
    }
    return duration; 
    let secondArray = finalJobs.Posted.split(" "); 
    let duration2 = secondArray[0]*60; 
    if(duration2 == duration){
        return true; 
    }

}

function search(element, findingAnother){
    let final = ""; 
    for (let element of kraggle){
        if(findingAnother(element)){
            final += element.Title + "\n"
        }

    }
    return final; 
}

let finalJobs = (kraggle.reduce((a,b)=>{return timeConversion(a)<timeConversion(b) ? b:a;}))
let exist = (search(kraggle, anotherExists)); 
let secondOutput = ""; 
for (let i =0; i<exist.length; i++){
    secondOutput += exist[i]; 
}
console.log(secondOutput); 