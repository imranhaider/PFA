import { Component, OnInit, ViewChild } from '@angular/core';
import { Income } from 'app/models/income.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { IncomeService } from '../income.service';

@Component({
  selector: 'app-edit-income',
  templateUrl: './edit-income.component.html',
  styleUrls: ['./edit-income.component.css']
})
export class EditIncomeComponent implements OnInit {

  incomeEntry: Income;
  
  constructor(private router: Router, private incomeService: IncomeService, private route: ActivatedRoute) { 
    this.incomeService = incomeService;
    this.incomeEntry = {Id:0, Description: '', Date: this.incomeService.getCurrentMonth(), Currency:'USD', Amount:0};
    console.log(route.params['id']);
    if( route.params['id']){
        this.setIncome( incomeService.getIncome(route.params['id']));        
    }

    route.params.subscribe((params: Params)=>{
      if( params['id']){
        this.setIncome( incomeService.getIncome(params['id']));
      }
    });
  }

  setIncome(income: Income){
    if (income){
      this.incomeEntry = income;
    }
  }

  onSave(){
    console.log(this.incomeEntry);
    if(this.incomeEntry.Description && this.incomeEntry.Date && this.incomeEntry.Amount > 0){
      this.incomeService.saveIncome(this.incomeEntry);
      this.onCancel();
    }
  }
  onCancel(){
    this.router.navigate(['/income']);
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
