/**
 * Define the Employee and Task concepts using the class notations
 */
class Employee{
    constructor (empName, salary, task){
        this.empName = empName; 
        this.salary = salary; 
        this.task = task;

        this.empInfo = function () {
            console.log("Name: " + this.empName + " Tasks >>> ");
            for (let t of this.task){
                t.printTask(); 
            }
        }
    }
}

class Task{
    constructor(taskDesc, dueDate){
        this.taskDesc = taskDesc; 
        this.dueDate = dueDate; 

        this.printTask = function () {
            console.log("Description: " + taskDesc + " Due Date: " + dueDate); 
        }
    }

}
// create the objects using the classes

let task1 = new Task("prepare the budget", "Jan-01");
let task2 = new Task("Conduct interviews", "March");

let task3 = new Task("Write report", "Jun"); 
let task4 = new Task("Present report", "July"); 

let emp1 = new Employee("Alice", 1000, [task1, task2]);
let emp2 = new Employee("Bob", 2000, [task3, task4]); 


emp1.empInfo();
emp2.empInfo();
