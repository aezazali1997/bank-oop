import { IBankAccount } from "./IBankAccount";

export class BankAccount implements IBankAccount
{
    public accountBalance:number;

    get AccountBalance():number{
        return this.accountBalance;
    }
    set AccountBalance(value:number){
        this.accountBalance=value;
    }

    constructor() {
        this.accountBalance=100;
    }
    Debit(amount: number): string {
        let statement = 'Sorry, You have insuffiecient balance!';
        if( amount>0){
            console.log('The amount you entered is wrong!');
            if(this.AccountBalance>amount){
                this.AccountBalance-=amount;
                statement='Transaction Succesfull! New Account balance is '+this.accountBalance;
            }
            else{
                statement='You dont have enough money to do this transaction'
            }
        }
        return statement
    }
    Credit(amount: number): string {
        let statement = 'Transaction failed!';
        if(amount>0){
            this.accountBalance +=amount;
            if(amount>100){
                this.accountBalance= this.accountBalance-1;
            }
            statement='your account has been credited succesfully!'
        }
    
        return statement
    }
}