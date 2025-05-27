import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeComponent } from './time/time.component';
import { timeInterval } from 'rxjs';
import { ExpenseComponent } from './expense/expense.component';
import { ChargecodesComponent } from './chargecodes/chargecodes.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  {path:'', redirectTo:'/time', pathMatch:'full' },
  {path: 'time' , component:TimeComponent},
  {path: 'expenses' , component:ExpenseComponent},
  {path: 'chargecode' , component:ChargecodesComponent},
  {path: 'summary' , component:SummaryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
