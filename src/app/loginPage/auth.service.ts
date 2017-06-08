import { Injectable} from '@angular/core';
import {UserModel} from './UserModel';
import { Observable } from 'rxjs/Rx';
import {USERDATA} from './userData';

@Injectable()
export class AuthService {
  getAuthenticatedUser(user:UserModel):Observable<UserModel>{
    return Observable.of(new Object(USERDATA.find(userX=>userX.username===user.username&&userX.password===user.password))).map(users=>(users) as UserModel);
  }

}
