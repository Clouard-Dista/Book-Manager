import { Category } from "category";

export class book{
    ISBNcode: String;
    DDCcode: String;
    owner: String;
    name: String;
    description: String;
    authr: String;
    dateAdded: Date;
    datePublication: Date;
    category: Category[];
    constructor(){

    }
}