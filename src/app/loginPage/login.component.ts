import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import{UserModel} from'./userModel';
import {AuthService} from "./auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  providers:[AuthService]
 })

export class LoginComponent {
    authenticatedUser:UserModel;
    authenticated:boolean;
    loginForm:FormGroup;

    constructor(private _fb:FormBuilder,private authService: AuthService,private router:Router){
        this.createForm();
    }

  onSubmit(model: UserModel, isValid: boolean) {
        console.log(model, isValid);
        if (!isValid) {
            console.log("invalid form");
        }
        else {
            console.log(model);
            this.authenticate(model);
        }
    }

    authenticate(user:UserModel){
        let self=this;
        this.authService.getAuthenticatedUser(user).subscribe(user=>{
            self.authenticatedUser = user;
            if(self.authenticatedUser!=null){
                self.authenticated=true;
                self.router.navigate(['/dashboard'])
            }    else{
                self.authenticated=false;
                self.router.navigate(['/'])
            }
        });
        
    }

    createForm(){
       this.loginForm =this._fb.group({
           userName: ['', [Validators.required]],
           password:['',[Validators.required]]
        });
    }

}