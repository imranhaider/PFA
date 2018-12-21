import { Component, OnInit } from '@angular/core';
import { ExpenseCategory } from 'app/models/expense-category.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ExpenseCategoryService } from '../expense-category.service';

@Component({
  selector: 'app-edit-expense-category',
  templateUrl: './edit-expense-category.component.html',
  styleUrls: ['./edit-expense-category.component.css']
})
export class EditExpenseCategoryComponent implements OnInit {

  category: ExpenseCategory;
  
  constructor(private router: Router, private service: ExpenseCategoryService, private route: ActivatedRoute) { 
    
    this.category = new ExpenseCategory(0,'',0);
    console.log(route.params['id']);
    if( route.params['id']){
        this.setExpenseCategory( service.getCategory(route.params['id']));        
    }

    route.params.subscribe((params: Params)=>{
      if( params['id']){
        this.setExpenseCategory( service.getCategory(params['id']));
      }
    });
  }

  setExpenseCategory(category: ExpenseCategory){
    if (category){
      this.category = category;
    }
  }

  onSave(){
    console.log(this.category);
    if(this.category.Title && this.category.Budget >0){
      this.service.saveExpenseCategory(this.category);
      this.onCancel();
    }
  }
  onCancel(){
    this.router.navigate(['/expense-category']);
  }

  ngOnInit() {
  }

  parseDate(dateString: string): Date {
    if (dateString) {
        return new Date(dateString);
    } else {
        return null;
    }
  }

}
