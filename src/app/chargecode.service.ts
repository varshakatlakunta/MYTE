import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChargecodeService {
  chargecodeList = [
    {
      selected: true,
      Display: true,
      Type: 'Chargable',
      SubType: '',
      Client: 'CATERPILLAR',
      Country: 'India',
      Description: 'Cat Digital FM - Mumbai MDC2B',
      Chargecode: 'B4QHKO00T',
      Owner: 'brant.t.miller',
    },
    {
      selected: false,
      Display: true,
      Type: 'Other',
      SubType: '',
      Client: '',
      Country: 'India',
      Description: 'Career Counseling',
      Chargecode: 'AKFZJ0M',
      Owner: 'kailash.pokuri',
    },
    {
      selected: false,
      Display: true,
      Type: 'Training/Recruiting/Absence',
      SubType: 'Absence',
      Client: '-',
      Country: 'India',
      Description: 'Sick & wellness leave',
      Chargecode: 'A301015',
      Owner: '-',
    },
    {
      selected: false,
      Display: true,
      Type: 'Training/Recruiting/Absence',
      SubType: 'Absence',
      Client: '-',
      Country: 'India',
      Description: 'Public Holiday',
      Chargecode: '970X00',
      Owner: '-',
    },
    {
      selected: false,
      Display: true,
      Type: 'Training/Recruiting/Absence',
      SubType: 'Absence',
      Client: '-',
      Country: 'India',
      Description: 'Optional Holiday',
      Chargecode: 'A301015',
      Owner: '-',
    },

    {
      selected: false,
      Display: true,
      Type: 'Training/Recruiting/Absence',
      SubType: 'Training',
      Client: '-',
      Country: 'India',
      Description: 'Central training-Faculty',
      Chargecode: 'A301020',
      Owner: '-',
    },
    {
      selected: false,
      Display: true,
      Type: 'Training/Recruiting/Absence',
      SubType: 'Training',
      Client: '-',
      Country: 'India',
      Description: 'Central training-Participant',
      Chargecode: 'A301015',
      Owner: '-',
    },
    {
      selected: false,
      Display: true,
      Type: 'Training/Recruiting/Absence',
      SubType: 'Training',
      Client: '-',
      Country: 'India',
      Description: 'Automotive training_BDC1-5',
      Chargecode: 'AISA1020',
      Owner: 'amol.subedhar',
    },
    {
      selected: false,
      Display: true,
      Type: 'Training/Recruiting/Absence',
      SubType: 'Training',
      Client: '-',
      Country: 'India',
      Description: 'TRA Others_TE ',
      Chargecode: 'AINGT01F',
      Owner: 'bineeta.chakraborthy',
    },
  ];

  constructor() {}
  addcode(chargeCode: any) {
    this.chargecodeList.push({
      selected: true,
      Display: true,
      Chargecode: chargeCode,
      Type: 'Other',
      SubType: '',
      Client: '',
      Country: 'India',
      Description: 'Training Participant',
      Owner: 'bisma.gethika',
    });
  }
}
