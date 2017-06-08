import { Component }   from '@angular/core';
import { FormControl,FormGroup,FormBuilder,Validators  } from '@angular/forms';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html'
})
export class HeroDetailComponent1{
    name=new FormControl();//it has threee optional args default value,array of validators,array of async variables

}

export class HeroDetailComponent2{
    heroForm=new FormGroup({
        name:new FormControl()
    });
}

export class HeroDetailComponent3{
    heroForm:FormGroup;

    constructor(private _fb:FormBuilder){
        this.createForm();
    }

    createForm(){
        this.heroForm=this._fb.group({
            name:['',Validators.required],
        });
    }
}
