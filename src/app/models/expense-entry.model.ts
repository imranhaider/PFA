import { ExpenseCategory } from "./expense-category.model";

export class ExpenseEntry{
    Id: number;
    CategoryId: number;
    Category: ExpenseCategory;
    Note: string;
    Amount: number;
    IsDebit: boolean;
    Date: Date;

    constructor(id: number, categoryId: number, desc: string, amount: number, date: Date){
        this.Id = id;
        this.CategoryId = categoryId;
        this.Note = desc;
        this.Amount = amount;
        this.Date = date;
    }
}