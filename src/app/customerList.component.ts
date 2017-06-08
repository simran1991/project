import { Component } from '@angular/core';
import {CUSTOMERDATA} from './customerData';
@Component({
  selector: 'customerList-component',
  templateUrl: './customerList.component.html',
})

export class CustomerListComponent {
  customers=CUSTOMERDATA;
}
