export class ExpenseCategory{
    Id: number;
    Title: string;
    Budget: number;
    ParentCategory: ExpenseCategory;
}