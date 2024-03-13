import { Property } from "./Property";
import { User } from "./User";

export class ReservedProperty{

    constructor(
        public reservedid:number,
        public username:string,
        public proplocation:string,
        public checkin:Date,
        public checkout:Date,
        public price:number,
        public user:User,
        public property:Property
    ){

    }
    
   
}