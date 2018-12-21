import { Injectable } from "@angular/core";
import { ExpenseEntry } from "app/models/expense-entry.model";
import { ExpenseCategory } from "app/models/expense-category.model";
import { ExpenseCategoryService } from "../expense-category/expense-category.service";

@Injectable()
export class ExpenseService {

    expenses: ExpenseEntry[];
    idSeed:number;

    constructor() {
        this.expenses = [
            new ExpenseEntry(1,1,'Hardees', 1000,new Date('12/14/2018')),
            new ExpenseEntry(2,1,'Fish Bar B. Q', 500,new Date('12/12/2018')),
            new ExpenseEntry(3,1,'Fish Dinner', 645,new Date('12/15/2018')),
            new ExpenseEntry(3,1,'Nuts', 900,new Date('12/20/2018')),

            new ExpenseEntry(4,2,'Tank Full', 2500,new Date('12/01/2018')),
            new ExpenseEntry(5,2,'Tank Full', 2500,new Date('12/12/2018')),
            new ExpenseEntry(6,1,'Tank Full', 2500,new Date('12/20/2018')),


            new ExpenseEntry(7,3,'Car checkup', 10000,new Date('12/8/2018')),
        ];

        this.idSeed = 7;
    }

    getCurrentMonthExpenses(): ExpenseEntry[]{
        return this.expenses.slice();
    }

    saveExpense(expenseEntry: ExpenseEntry){
        
        if(expenseEntry.Id == 0){
            expenseEntry.Id = this.idSeed++;
            this.expenses.push(expenseEntry);
        }
    }

    deleteExpense(id: number){
        this.expenses = this.expenses.filter(e => e.Id != id);
    }

}