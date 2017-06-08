import { Component } from '@angular/core';


@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
})

export class HomeComponent {
    homeTitle:string;
    countValue:number;
    constructor(){
        this.homeTitle='Welcome to Home';
        this.countValue=10;
    }

    update(event:any){
        this.countValue=event;
    }
}