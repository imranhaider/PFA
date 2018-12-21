import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {Topnavbar} from "./components/topnavbar/topnavbar.component";
import {Navigation} from "./components/navigation/navigation.component";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app.routes";
import {HomeComponent} from "./pages/home/home.component";
import { IncomeComponent } from './components/income/income.component';
import { EditIncomeComponent } from './components/income/edit-income/edit-income.component';
import { ExpenseComponent } from './components/expense/expense.component';
import { IncomeService } from './components/income/income.service';
import { ExpenseCategoryComponent } from './components/expense-category/expense-category.component';
import { EditExpenseCategoryComponent } from './components/expense-category/edit-expense-category/edit-expense-category.component';
import { ExpenseCategoryService } from './components/expense-category/expense-category.service';
import { ExpenseService } from './components/expense/expense.service';

@NgModule({
  declarations: [
    AppComponent,
    Navigation,
    Topnavbar,
    HomeComponent,
    IncomeComponent,
    EditIncomeComponent,
    ExpenseComponent,
    ExpenseCategoryComponent,
    EditExpenseCategoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [IncomeService, ExpenseCategoryService, ExpenseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
