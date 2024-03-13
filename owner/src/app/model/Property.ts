import { Owner } from "./Owner";

export class Property{
    constructor(
        public propid:number,
        public propname:string,
        public proplocation:string,
        public propsize:string,
        public propfeatures:string,
        public proptype:string,
        public image1:string,
        public image2:string,
        public image3:string,
        public price:number,
        public ratings:number,
        public owner:Owner
    ){

    }
    
    
}