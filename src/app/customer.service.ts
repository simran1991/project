import { Injectable} from '@angular/core';
import {Customer} from './customer';
import { Observable } from 'rxjs/Rx';
import {CUSTOMERDATA} from './customerData';

@Injectable()
export class CustomerService {
  getCustomers():Observable<Customer[]>{
    return Observable.of(new Object(CUSTOMERDATA)).map(customers=>(customers) as Customer[]);
  }
}
