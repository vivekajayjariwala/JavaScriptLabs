const fs = require("fs");
const words = require("./words.json");

function getDataPromise(fileName, dataType)
{
    let promise = new Promise((resolve, reject) => 
    {
        fs.readFile(fileName, dataType, (error,data) => 
        {
            if(data)
            {
                resolve(data);
            }
            else
                reject(error);
        });
    });
    return promise;
}

let dataArray = [];

let dataPromise = getDataPromise("Optimism_and_your_health.txt", "utf8");
dataPromise.then((result) => {gettingNumberofWords(result)})
            .catch(() => {console.log("File Not Found")});

let dataPromise2 = getDataPromise("results.txt", "utf8");
dataPromise2.then(() => {outputData()})
            .catch(() => {console.log("File Not Found")});

let synonyms, related, nearAntonyms, antonyms = [];
let synonymCounter = 0, relatedCounter = 0, nearAntonymCounter = 0, antonymCounter = 0;

synonyms = words.Synonyms;
related = words.Related;
nearAntonyms = words["Near Antonyms"];
antonyms = words.Antonyms;


function gettingNumberofWords (input)
{

    dataArray = input.split(" ");

    for (let word of dataArray)
    {

        for (let index of synonyms)
        {
            if (word.toLowerCase().includes(index))
            {
                synonymCounter++;
            }
        }
        for (let index of related)
        {
            if (word.toLowerCase().includes(index))
            {
                relatedCounter++;
            }
        }
        for (let index of nearAntonyms)
        {
            if (word.toLowerCase().includes(index))
            {
                nearAntonymCounter++;
            }
        }
        for (let index of antonyms)
        {
            if (word.toLowerCase().includes(index))
            {
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