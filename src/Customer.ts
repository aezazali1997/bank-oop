import { BankAccount } from "./BankAccount";

export class Customer{
    // first name
    private firstName:string="";
    get FirstName():string{
        return this.firstName
    }
    set FirstName(value:string){
        this.firstName=value
    }
    // last name
    private lastName:string="";
    get LastName():string{
        return this.lastName
    }
    set LastName(value:string){
        this.lastName=value
    }
    // gender
    private gender:string="";
    
    get Gender():string{
        return this.gender
    }
    set Gender(value:string){
        this.gender=value
    }
    
    
    // Age
    private age:string="0";
    get Age():string{
        return this.age
    }
    set Age(value:string){
        this.age=value
    }
    // mobile number
    private mobileNumber:string="";

    get MobileNumber():string{
        return this.mobileNumber
    }
    set MobileNumber(value:string){
        this.mobileNumber=value
    }
    // bank account
    private bankAccount:BankAccount= new BankAccount()
    get BankAccount():BankAccount{
        return this.bankAccount
    }
    set BankAccount(value:BankAccount){
        this.bankAccount=value
    }
    CustomerInfo():string{
        return 'Name :' + this.firstName + ' '+ this.lastName
    }
    
    

}