import { Component } from '@angular/core';

@Component({
  selector: 'dashboard-component',
  templateUrl: './dashboard.component.html',

 })

export class DashboardComponent {
    title:String;
    constructor(){
        this.title="Dashboard";
    }
}