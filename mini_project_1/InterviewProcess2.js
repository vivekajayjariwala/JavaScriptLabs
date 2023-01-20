class Candidate{
    constructor(fullName, email){
        this.__fullName__ = fullName; 
        this.__email__ = email; 
    }

    get fullName(){
        return this.__fullName__; 
    }

    set fullName(name){
        this.__fullName__ = name; 
    }

    get email(){
        return this.__email__; 
    }

    set email(eaddress){
        this.__email__ = eaddress; 
    }

}

class Interview{
    constructor(candidate){
        this.__candidate__ = candidate; 
    }

    set candidate(candidate){
        this.__candidate__ = candidate; 
    }

    get candidate(){
        return this.__candidate__; 
    }

    scheduleInterview(date){
        console.log(`An interview was scheduled with ${this.candidate.fullName} at ${date}`)
    }

}

let candidate1 = new Candidate("John Smith", "jonhn@gmail.com");


let interview = new Interview(candidate1); 

interview.scheduleInterview('Jan 1st'); 


// class TechnicalInterview extends Interview{
//     constructor(platform){
//         super();
//         this.__platform__ = platform; 
//     }

//     set platform(p){
//         this.__platform__ = p;  
//     }

//     get platform(){
//         return this.__platform__; 
//     }

//     scheduleInterview(date){
//         super.scheduleInterview(date);
//         console.log(`Interview platform ${this.__platform__} is configured`)

//     }
// }

// let tech = new TechnicalInterview(candidate1, 'HackerRank')
// tech.scheduleInterview('Feb. 1st')


// class HRInterview extends Interview{
//     constructor(questionnaire){
//         super(); 
//         this.__questionnaire__ = questionnaire; 
//     }
//     set questionnaire(q){
//         this.__questionnaire__ = q; 
//     }
//     get questionnaire(){
//         return this.__questionnaire__; 
//     }
//     scheduleInterview(date){
//         super.scheduleInterview(date);
//         console.log(`Interview questionnaire ${this.__questionnaire__} will be sent to ${super.candidate.email}`)

//     }

// }

// let candidate1 = new Candidate("John Smith", "jonhn@gmail.com");
// let candidate2 = new Candidate("Alice Wonder", "alice@gmail.com")

// let HR = new HRInterview(candidate1, ['Q1', 'Q2', 'Q3']); 
// let tech = new TechnicalInterview(candidate1, 'HackerRank')

// HR.scheduleInterview('Jan. 1st')
// tech.scheduleInterview('Feb. 1st')


// let HR2 = new HRInterview(candidate2, ['Q1', 'Q2', 'Q3']); 
// let tech2 = new TechnicalInterview(candidate2, 'HackerRank')

// HR.scheduleInterview('Mar. 1st')
// tech.scheduleInterview('Apr. 1st')
