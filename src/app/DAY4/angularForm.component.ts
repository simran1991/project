import { UserInfo } from "./usrInfo";
import { Component } from '@angular/core';
@Component({
    selector: 'angularForm-component',
    templateUrl: './angularForm.component.html',

})

export class AngularFormComponent {
    private user: UserInfo;
    countries = ["india", "pakistan", "australia", "canada"];
    constructor() {
        this.user = {
            name: "siamran",
            address: {
                street: '3b2',
                postcode: '160059',
                country: "india",
            }
        };
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
}