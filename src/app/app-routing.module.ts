import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeComponent } from './time/time.component';
import { timeInterval } from 'rxjs';
import { ExpenseComponent } from './expense/expense.component';
import { ChargecodesComponent } from './chargecodes/chargecodes.component';
import { SummaryComponent } from './summary/summary.component';
import { ExpenseDetailComponent } from './expense-detail/expense-detail.component';

const routes: Routes = [
  {path:'', component:TimeComponent},
  {path: 'time' , component:TimeComponent},
  {path: 'expenses' , component:ExpenseComponent},
  {path: 'chargecode' , component:ChargecodesComponent},
  {path: 'summary' , component:SummaryComponent},
  {path: 'expenses/detail', component:ExpenseDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
