import { Component,OnInit } from '@angular/core';
import {CustomerService} from './customer.service';
import {Customer} from './customer';
@Component({
  selector: 'customerNew-component',
  templateUrl: './customerNew.component.html',
  providers:[CustomerService]
})

export class CustomerNewComponent implements OnInit{
  customerTitle:string;
  customers: Customer[];
  constructor(private customerService:CustomerService){
    this.customerTitle='Customer Welcome Page';
  }
  
  ngOnInit(){
    this.getCustomers();
  }
  
  getCustomers(){
    return this.customerService.getCustomers().subscribe(customers=>this.customers=customers);
  }

}