import { Component } from '@angular/core';


@Component({
  selector: 'jobs-component',
  templateUrl: './jobs.component.html',
})

export class JobsComponent {
 jobsTitle:string;
 
 constructor(){
   this.jobsTitle="Jobs welcome page";
 }
}