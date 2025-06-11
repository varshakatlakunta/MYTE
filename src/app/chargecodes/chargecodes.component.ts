import { Component } from '@angular/core';
import { ChargecodeService } from '../chargecode.service';

@Component({
  selector: 'app-chargecodes',
  templateUrl: './chargecodes.component.html',
  styleUrl: './chargecodes.component.scss',
})
export class ChargecodesComponent {
  chargecode: string = '';
  addchargecode = '';
  constructor(private cs: ChargecodeService) {}
  chargecodes: any;
  ngOnInit(): void {
    this.chargecodes = this.cs.chargecodeList;
  }

  add() {
    this.cs.addcode(this.addchargecode);
    this.addchargecode = '';
  }
}