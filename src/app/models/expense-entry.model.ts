import { ExpenseCategory } from "./expense-category.model";

export class ExpenseEntry{
    Id: number;
    ExpenseCategory: ExpenseCategory;
    Note: string;
    Amount: number;
    IsDebit: boolean;
    Date: Date;
}