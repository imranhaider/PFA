export class ExpenseCategory{
    Id: number;
    Title: string;
    Budget: number;
    Tags: string[];
    ParentCategory: ExpenseCategory;
    CreatedOn: Date;

    constructor(id: number, title: string, budget: number){
        this.Id = id;
        this.Title = title;
        this.Budget = budget;
    }
}