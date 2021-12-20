import { validateEmail } from "./helper"
const users = [     // Array of Objects, Objects contain email
    {
        traineeEmail: 'trainee1@successive.tech',
        reviewerEmail: 'reviewer1@successive.tech',
    },
    
    {
        traineeEmail: 'trainee2@gmail.com',
        reviewerEmail: 'reviewer3@successive.tech',
    },
    
    {
        traineeEmail: 'trainee3@successive.tech',
        reviewerEmail: 'reviewer3@gmail.com',
    },
    ]
    
    
    
    export var validUsers = []     // List of Valid users
    export var invalidUsers = []   // List of Invalid users
    
    export const validateUsers=(users)=>{
    
        users.forEach(element => {
            const {traineeEmail} = element      // using destructing 
            const {reviewerEmail} = element     // using destructing
            
            validateEmail(traineeEmail)==true?validUsers.push(traineeEmail):invalidUsers.push(traineeEmail)
            validateEmail(reviewerEmail)==true?validUsers.push(reviewerEmail):invalidUsers.push(reviewerEmail)
            }
        );
    }
    
    console.log();
    validateUsers(users)
    
    console.log('Valid users:')
    validUsers.forEach(element => {
        console.log(element)
    });
    console.log('Number of Valid users: \n', validUsers.length)
    
    console.log();
    
    console.log('Invalid users:')
    invalidUsers.forEach(element => {
        console.log(element)
    });
    console.log('Number of Invalid users: \n', invalidUsers.length)
    
    /*
    
    For current test case i.e., 
    
    [
    {
        traineeEmail: 'trainee1@successive.tech',
        reviewerEmail: 'reviewer1@successive.tech',
    },
    
    {
        traineeEmail: 'trainee2@gmail.com',
        reviewerEmail: 'reviewer3@successive.tech',
    },
    
    {
        traineeEmail: 'trainee3@successive.tech',
        reviewerEmail: 'reviewer3@gmail.com',
    },
    ]
    
    
    O/p:
    
    Valid users:
    trainee1@successive.tech
    reviewer1@successive.tech
    reviewer3@successive.tech
    trainee3@successive.tech
    Number of Valid users: 
     4
    
    Invalid users:
    trainee2@gmail.com
    reviewer3@gmail.com
    Number of Invalid users: 
     2
    
     */
    // Extract Value from Property
const extractValue = (arr, prop) => {

    let extractedValue = arr.map(item => item[prop]);
    return extractedValue;

}

const emailTrainees = extractValue(users, 'traineeEmail');
const emailReviewers = extractValue(users, 'reviewerEmail');
console.log("Trainee Emails:", emailTrainees)
console.log("Reviewer Emails:", emailReviewers)
