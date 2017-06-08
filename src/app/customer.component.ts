import { Component , Input} from '@angular/core';
import {Customer} from './customer';
@Component({
  selector: 'customer-component',
  templateUrl: './customer.component.html',
  
})

export class CustomerComponent {
  @Input()  customer : Customer;
}
