import { UserInfo } from "./usrInfo";
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import{ SharedService} from "../DAY5/shared.service";

@Component({
    selector: 'angularFormReactive-component',
    templateUrl: './angularFormReactive.component.html',
})

export class AngularFormReactiveComponent {
    private user: UserInfo;
    countries = ["india", "pakistan", "australia", "canada"];
    submitted:boolean;
    private userForm:FormGroup;
    emittedValueFromSearch:String;
    constructor(private _fb:FormBuilder,private sharedService:SharedService) {
        this.user={
            name:'simran',
            address:{
                street:'3b2',
                country:'india',
                postcode:'1556677'
            }

        }       
        this.createForm();
        this.sharedService.onSearchText$.subscribe(x=>this.emittedValueFromSearch=x);
}
    

    save(model: UserInfo, isValid: boolean) {
        console.log(model, isValid);
        if (!isValid) {
            console.log("invalid form");
        }
        else {
            console.log(model);
        }
    }
    createForm(){
        this.userForm=this._fb.group({
            name:[this.user.name,[Validators.required,Validators.minLength(5)]],
            address:this._fb.group({
                street:[this.user.address.street,Validators.required],
                postcode:[this.user.address.postcode,Validators.required],
                country:[this.user.address.country,Validators.required]
            })
        });
    }
}