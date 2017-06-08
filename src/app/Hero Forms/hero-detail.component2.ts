import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'hero-detail2',
    templateUrl: './hero-detail.component2.html'
})
export class HeroDetailComponent2 {
    heroForm = new FormGroup({
        name: new FormControl()
    });
}



