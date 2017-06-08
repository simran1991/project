import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Address, Hero, states } from './data-model';
@Component({
    selector: 'hero-detail3',
    templateUrl: './hero-detail.component3.html'
})
export class HeroDetailComponent3 {
    heroForm: FormGroup;
    states = states;

    constructor(private _fb: FormBuilder) {
        this.createForm();
    }

    // createForm() {
    //     this.heroForm = this._fb.group({
    //         name: ['', Validators.required],
    //         address: this._fb.group({
    //             street: '',
    //             city: '',
    //             state: '',
    //             zip: '',
    //         }),
    //         power: '',
    //         sidekick: ''
    //     });
    // }

    createForm() {
        this.heroForm = this._fb.group({
            name: ['', Validators.required],
            address: this._fb.group(
                new Address()
            ),
            power: '',
            sidekick: ''
        });
    }
}
