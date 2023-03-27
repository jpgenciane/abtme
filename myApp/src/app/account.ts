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
    priorityName:string;
    priorityLevel:string;
    priorityStatus:string;
    dueDate:string;   
}

