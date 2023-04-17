require('./db');
const Employee = require('./employee')

let tempEmployees = [
    {   
        FirstName: "Dhara",
        LastName: "Parmar",
        Age: 24,
        DateOfJoining: "2023-01-16",
        Title: "Team Leader",
        Department: "QA",
        EmployeeType: "Full-Time",
        CurrentStatus: 1

    },
    {
        FirstName: "Rahul",
        LastName: "Mistry",
        Age: 25,
        DateOfJoining: "2022-09-06",
        Title: "Process Engineer",
        Department: "Automation",
        EmployeeType: "Full-Time",
        CurrentStatus: 1
    }
];  

Employee.insertMany(tempEmployees)
    .then(function(data){
        console.log("Data", data)
})