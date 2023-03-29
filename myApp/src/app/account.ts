export interface Account{
    id?:number;
    username:string;
    password:string;
    firstName:string;
    lastName:string;
    number:string;
    email:string;
    skill:string;
    address:{
        houseNumber:string,
        streetName:string,
        subdivisionBarangay:string,
        city:string,
        province:string,
        country:string,
    };
   
}

export interface Priority{
    id?:number;
    userId?:number;
    priorityName:string;
    priorityLevel:string;
    priorityStatus:string;
    dueDate:string;  
    priorityDesc:string;
    color:string; 
}


export interface Expense{
    id?:number;
    userId?:number;
    ExpenseName:string;
    ExpensePrice:number;
    ExpenseDate:string;
    ExpenseType:string;
    ExpenseTypeImg:string;
    EpenseCreateName:string;
    ExpenseCreateNameDate:string;
    ExpenseUpdateName:string;
    ExpenseUpdateNameDate:string;
}


