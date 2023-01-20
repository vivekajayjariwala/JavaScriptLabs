
let triangleFrame = function(letter)
{
    let framedLetter = '';
    for (let i=0;i<4;i++){
        
        let line='';
        let spaces = 3-i; 
        // write a loop to start the line with 3 - i spaces
        for (let j=0; j<spaces;j++){
            line += ' ';
        }
       

        // The third line will contain the framed letter so we 
        if (i==2){
            line += `* ${letter} *`;
        }

        else
        {
            // the rest of the lines of the triangle would contain all stars
            // create a loop to add 2i + 1 stars to the line
            let stars = 2*(i)+1; 
            for (let k=0; k<stars; k++){
                line += "*";
            }
            
        }

        framedLetter += line + '\n';
    }

    return framedLetter;
}


let rectangleFrame = function(letter){
    framedLetter = '';
    line = "";

    //write a loop the add five stars to the line
    for (let j = 0; j < 5; j++){
        line += "*";
    }

    // set the framed letter to be of 3 lines 
    framedLetter = line + '\n' + `* ${letter} *` + '\n' + line + '\n';

    return framedLetter;
}


// Set the function definition for the gernalFramer so that it would recieve two arguments
//      - the first argument is a callback function that creates the desired frame
//      - the second argument is the letter to be framed.
// The retun should be the string of the letter framed by the given framer.
let generalFramer= function (frame, alphabet){
    return frame(alphabet); 
}

console.log(generalFramer(triangleFrame, "A"));
console.log(generalFramer(triangleFrame, "B"));
console.log(generalFramer(triangleFrame, "C"));

console.log(generalFramer(rectangleFrame, "A"));
console.log(generalFramer(rectangleFrame, "B"));
console.log(generalFramer(rectangleFrame, "C"));