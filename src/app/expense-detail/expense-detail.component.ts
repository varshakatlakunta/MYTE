import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
interface Country{
  name: string;
  code:number;
}

@Component({
  selector: 'app-expense-detail',
  templateUrl: './expense-detail.component.html',
  styleUrls: ['./expense-detail.component.scss'],
})
export class ExpenseDetailComponent implements OnInit {
  expenseCode: string = '';
  country: Country[] = [];
  selectedCountry?: Country;
  chargeCode:string=''
  from: string=''
  to:string=''
  amount:number | null = null;
  invoice:string=''
  comments:string=''



  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit() {
    this.country = [
      { name: 'India', code: 1 },
      { name: 'America', code: 2 },
      { name: 'Canada', code: 3 },
    ];
    this.route.queryParams.subscribe((params) => {
      this.expenseCode = params['code'];
    });
  }
  close() {
    console.log('close clocked')
    this.router.navigateByUrl('/expenses');
  }
  save(){
  
  }
}


