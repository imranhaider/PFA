import { Injectable } from "@angular/core";
import { ExpenseCategory } from "app/models/expense-category.model";

@Injectable()
export class ExpenseCategoryService{

    private expenseCategories: ExpenseCategory[];
    private idSeed;

    constructor(){
        this.expenseCategories = [
            new ExpenseCategory(1,'Food', 10),
            new ExpenseCategory(2,'Petrol', 10),
            new ExpenseCategory(3,'Car Maintenance', 10),
            new ExpenseCategory(4,'Grocery', 15),
            new ExpenseCategory(5,'Household', 20),
            new ExpenseCategory(6,'Travel', 10),
            new ExpenseCategory(7,'Clothing', 10),
            new ExpenseCategory(8,'Self Education', 10),
        ];
    }

    saveExpenseCategory(category: ExpenseCategory){
        if(category.Id == 0){
            category.Id = this.idSeed++;
            this.expenseCategories.push(category);
        }  
    }

    deleteCategory(id: number){
        this.expenseCategories = this.expenseCategories.filter(i=> i.Id != id);
     }
 
     getCategory(id: Number){        
         return this.expenseCategories.find(i=> i.Id == id);
     }

    getExpenseCategories(): ExpenseCategory[]{
        return this.expenseCategories.slice();
    }
}