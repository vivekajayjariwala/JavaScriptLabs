
const words = require('./words.json')

const fs = require('fs'); 

function getDataPromise(fileName, dataType){
    let promise = new Promise((resolve, reject)=>{
        fs.readFile(fileName, dataType, (error, data)=>{
            if(data){
                resolve(data);
            }
            else{
                reject(data);
            }
        });
    });
    return promise; 
}

let synonyms = words.Synonyms; 
let related = words.Related; 
let nearAntonyms = words["Near Antonyms"]; 
let antonyms=words.Antonyms; 
let allWords = []; 

let synonymCounter = 0; 
let relatedCounter = 0;
let nearAntonymCounter = 0; 
let antonymCounter = 0; 

// find the words that are included in the article
let dataPromise = getDataPromise("Optimism_and_your_health.txt", "utf8");
dataPromise.then((result) => {findNumberOfWords(result)})
            .catch(() => {console.log("File Not Found")});

let dataPromise2 = getDataPromise("results.txt", "utf8");
dataPromise2.then(() => {outputData()})
            .catch(() => {console.log("File Not Found")});

function findNumberOfWords(file){
    allWords = file.split(" "); 
    for (let word of allWords){
        for (let synonymWord of synonyms){
            if(word.toLowerCase().includes(synonymWord)){
                synonymCounter++; 
            }
        }
        for (let relatedWord of related){
            if(word.toLowerCase().includes(relatedWord)){
                relatedCounter++; 
            }
        }
        for (let nearAntonymWord of nearAntonyms){
            if(word.toLowerCase().includes(nearAntonymWord)){
                nearAntonymCounter++; 
            }
        }
        for (let antonymWord of antonyms){
            if(word.toLowerCase().includes(antonymWord)){
                antonymCounter++; 
            }
        }
    }
}

function outputData ()
{
    let output = {Synonyms:synonymCounter, Related:relatedCounter, ["Near Antonyms"]:nearAntonymCounter, Antonyms:antonymCounter};
    console.log(JSON.stringify(output));
    fs.writeFile("result.txt", JSON.stringify(output), () => {});

}
