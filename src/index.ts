#! /usr/bin/env node
import {Customer} from './Customer'
import readline from 'readline-sync';
import { BankAccount } from './BankAccount';
const customer = new Customer();
const getInput=(query:string):string=>{
    return readline.question(query+'\n')
}
customer.FirstName= getInput('what is your name?');

customer.LastName = getInput('What is your last name?');

customer.Age=getInput('your age?');

customer.Gender= getInput('Your gender?');

customer.MobileNumber=getInput('Your mobile number?');

console.log('Account Creating....');

console.log('-------------');

console.log(customer.CustomerInfo());

console.log('#v Account created #');

let input = 4;
while(input!=3){
    input = +getInput('1. Debit ammount\n2. Credit ammount\n 3. Exit');
    switch(input){
        case 1: {
            let ammount = +getInput('Enter amoount');
            console.log(customer.BankAccount.Debit(ammount));
            break;
        }
        case 2:{

            let ammount = +getInput('Enter amoount');
            console.log(
    
                customer.BankAccount.Credit(ammount)
            )
            break;
        }
        default : break;




    }
}