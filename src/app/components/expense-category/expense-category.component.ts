import { Component, OnInit } from '@angular/core';
import { ExpenseCategory } from 'app/models/expense-category.model';
import { IncomeService } from '../income/income.service';
import { Router } from '@angular/router';
import { ExpenseCategoryService } from './expense-category.service';

@Component({
  selector: 'app-expense-category',
  templateUrl: './expense-category.component.html',
  styleUrls: ['./expense-category.component.css']
})
export class ExpenseCategoryComponent implements OnInit {

  expenseCategories: ExpenseCategory[];
  private selectedIndex: number;
  private slectedCategory: ExpenseCategory;

  constructor(private service: ExpenseCategoryService, private router: Router) { 
    this.selectedIndex = -1;
    this.expenseCategories = service.getExpenseCategories();
  }

  ngOnInit() {
    
  }

  edit(){
    console.log(this.slectedCategory.Id);
    this.router.navigate(['expense-category/', this.slectedCategory.Id])
  }

  delete(){
    this.service.deleteCategory(this.slectedCategory.Id);
    this.selectedIndex = -1;
    this.expenseCategories = this.service.getExpenseCategories();
  }

  onRowSelection(index:number, category: ExpenseCategory){
    this.selectedIndex = index;
    this.slectedCategory = category; 
  }


}
