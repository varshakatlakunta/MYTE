import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Expenses {
  name: string;
  code: string;
}
@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss'],
})
export class ExpenseComponent implements OnInit {
  expenses: Expenses[] = [];

  selectedExpense?: Expenses;

  ngOnInit() {
    this.expenses = [
      { name: 'Telecom/Internet', code: 'IE' },
      { name: 'Meals and Entertainment', code: 'ME' },
      { name: 'Travel-Public,Limo & Other', code: 'TE' },
      { name: 'Other Allowances', code: 'OTA' },
      { name: 'Startup Allowances', code: 'STA' },
      { name: 'Travel - Rail', code: 'TR' },
      { name: 'Accommodation - Hotel', code: 'AH' },
      { name: 'Other Expenses', code: 'OTR' },
    ];
  }

  constructor(private router: Router) {}
  onExpenseChange() {
    if (this.selectedExpense) {
      this.router.navigate(['/expenses/detail'], {
        queryParams: { code: this.selectedExpense.code },
      });
    }
  }

}