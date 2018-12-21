import { Component, OnInit } from '@angular/core';
import { ExpenseCategory } from 'app/models/expense-category.model';
import { ExpenseEntry } from 'app/models/expense-entry.model';
import { ExpenseCategoryService } from '../expense-category/expense-category.service';
import { ExpenseService } from './expense.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  expenses: ExpenseEntry[];
  expenseCategories: ExpenseCategory[];
  expenseEntry: ExpenseEntry;

  selectedIndex = -1;


  constructor(private expenseCategoryService: ExpenseCategoryService, private expenseService: ExpenseService) {
    this.expenseEntry = new ExpenseEntry(0,1, '',0,new Date());
    this.expenseCategories = this.expenseCategoryService.getExpenseCategories();    
    this.expenses = this.expenseService.getCurrentMonthExpenses();
}

  ngOnInit() {
  }

  onSave(){

    if(this.expenseEntry.Amount>0 && this.expenseEntry.Note){
      this.expenseService.saveExpense(this.expenseEntry);
      this.expenses = this.expenseService.getCurrentMonthExpenses();
    }
  }

  onClear(){
    this.expenseEntry = new ExpenseEntry(0,1, '',0,new Date());
    
  }

  onDelete(){
    this.expenseService.deleteExpense(this.expenseEntry.Id);
    this.expenses = this.expenseService.getCurrentMonthExpenses();
  }

  getExpenseCategoryTitle(id: number){
    return this.expenseCategories.find(c=> c.Id == id).Title;
  }

  onCategorySelection(id: number){

  }

  onRowSelection(index: number, expenseEntry: ExpenseEntry){
    this.selectedIndex = index;
    this.expenseEntry = expenseEntry;
  }

  parseDate(dateString: string): Date {
    if (dateString) {
        return new Date(dateString);
    } else {
        return null;
    }
  }

}
