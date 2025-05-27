import { Component, OnInit } from '@angular/core';
interface Expenses {
  name: string;
  code: string;
}
@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrl: './expense.component.scss',
})
export class ExpenseComponent implements OnInit {
  expenses: Expenses[] | undefined;

  selectedExpense: Expenses | undefined;

  ngOnInit() {
    this.expenses = [
      { name: 'Telecom/Internet', code: 'IE' },
      { name: 'Meal', code: 'ME' },
      { name: 'Travel', code: 'TE' },
      { name: 'Other Allowences', code: 'OTA' },
      { name: 'Other Expenses', code: 'OTR' },
    ];
  }
}