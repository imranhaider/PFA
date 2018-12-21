import { Injectable } from "@angular/core";
import { Income } from "app/models/income.model";

@Injectable()
export class IncomeService{
    private CurrentMonthIncomeCol: Income[];
    private idSeed = 2;
    
    constructor() {
        this.CurrentMonthIncomeCol = [
            { Id:1, Date:new Date('12/1/2018'), Description:'Salary', Amount:1000, Currency: 'USD'},
            { Id: 2, Date:new Date('12/6/2018'), Description:'Free Lance', Amount:200, Currency: 'USD'}
          ];        
    }

    getCurrentMonthIncomeCollection(){
        return this.CurrentMonthIncomeCol.slice();
    }

    saveIncome(income: Income){
        if(income.Id == 0){
            income.Id = this.idSeed++;
            this.CurrentMonthIncomeCol.push(income);
        }        
    }

    deleteIncome(id: number){
       this.CurrentMonthIncomeCol = this.CurrentMonthIncomeCol.filter(i=> i.Id != id);
    }

    getIncome(id: Number){        
        return this.CurrentMonthIncomeCol.find(i=> i.Id == id);
    }

    getCurrentMonth(): Date{
        return new Date();
    }
    
}