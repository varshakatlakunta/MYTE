import { Component } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrl: './time.component.scss',
})
export class TimeComponent {
  displaycols: string[]= [
      'Charge Codes', 'Thu 01', 'Fri 02', 'Sat 03', 'Sun 04', 'Mon 05', 'Tue 06', 'Wed 07',
      'Thu 08', 'Fri 09', 'Sat 10', 'Sun 11', 'Mon 12', 'Tue 13', 'Wed 14', 'Thu 15', 'Total'
  ];
  data: any[]=[
    {
    'Charge Codes' : 'Work Location', 'Thu 01':16, 'Fri 02':16, 'Sat 03':16, 'Sun 04':16, 'Mon 05':16, 'Tue 06':16, 'Wed 07':16,
    'Thu 08':16, 'Fri 09':16, 'Sat 10':16, 'Sun 11':16, 'Mon 12':16, 'Tue 13':16, 'Wed 14':16, 'Thu 15':16, 'Total':''
    },
    {
      'Charge Codes' : 'Assigned Location', 'Thu 01':16, 'Fri 02':16, 'Sat 03':16, 'Sun 04':16, 'Mon 05':16, 'Tue 06':16, 'Wed 07':16,
      'Thu 08':16, 'Fri 09':16, 'Sat 10':16, 'Sun 11':16, 'Mon 12':16, 'Tue 13':16, 'Wed 14':16, 'Thu 15':16, 'Total':''
    },
    {
      'Charge Codes' : 'Company Code', 'Thu 01':8102, 'Fri 02':8102, 'Sat 03':8102, 'Sun 04':8102, 'Mon 05':8102, 'Tue 06':8102, 'Wed 07':8102,
      'Thu 08':8102, 'Fri 09':8102, 'Sat 10':8102, 'Sun 11':8102, 'Mon 12':8102, 'Tue 13':8102, 'Wed 14':8102, 'Thu 15':8102, 'Total':''
    }
  ];
}
