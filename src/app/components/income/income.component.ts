import { Component, OnInit } from '@angular/core';
import { Income } from 'app/models/income.model';
import { IncomeService } from './income.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {

  public CurrentMonthIncomeColl : Income[];
  
  private selectedIndex: number;
  private slectedIncome: Income;

  constructor(private incomeService: IncomeService, private router: Router) { 
    this.selectedIndex = -1;
    this.CurrentMonthIncomeColl = incomeService.getCurrentMonthIncomeCollection();
  }

  ngOnInit() {
    
  }

  edit(){
    console.log(this.slectedIncome.Id);
    this.router.navigate(['income/', this.slectedIncome.Id])
  }

  delete(){
    this.incomeService.deleteIncome(this.slectedIncome.Id);
    this.selectedIndex = -1;
    this.CurrentMonthIncomeColl = this.incomeService.getCurrentMonthIncomeCollection();
  }

  onRowSelection(index:number, income: Income){
    this.selectedIndex = index;
    this.slectedIncome = income; 
  }

}
