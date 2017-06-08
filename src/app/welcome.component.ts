import { Component } from '@angular/core';

@Component({
  selector: 'welcome-component',
  templateUrl: './welcome.component.html',
  
})

export class WelcomeComponent {
  title : string;
  age: number;

  constructor(){
      this.title="Mr Singh";
      this.age=26;
  }

}
