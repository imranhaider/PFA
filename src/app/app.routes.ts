import {HomeComponent} from "./pages/home/home.component";
import { IncomeComponent } from "./components/income/income.component";
import { ExpenseComponent } from "./components/expense/expense.component";
import { EditIncomeComponent } from "./components/income/edit-income/edit-income.component";
import { ExpenseCategoryComponent } from "./components/expense-category/expense-category.component";
import { EditExpenseCategoryComponent } from "./components/expense-category/edit-expense-category/edit-expense-category.component";

export const appRoutes=[
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'income',        
        component: IncomeComponent        
    },
    {
        path: 'income/add',        
        component: EditIncomeComponent        
    },
    {
        path: 'income/:id',        
        component: EditIncomeComponent        
    },
    {
        path: 'expense',
        component: ExpenseComponent,
    },
    {
        path: 'expense-category',
        component: ExpenseCategoryComponent,
    },
    {
        path: 'expense-category/add',
        component: EditExpenseCategoryComponent,
    },
    {
        path: 'expense-category/:id',
        component: EditExpenseCategoryComponent,
    },
    {
        path: 'others',
        loadChildren:'./pages/others/others.module#OthersModule',
    }
];