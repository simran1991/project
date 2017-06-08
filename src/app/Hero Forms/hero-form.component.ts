
import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector: 'hero-form',
    templateUrl: './hero-form.html',
})
export class HeroForm {
    powers = ["Really smart", "super flexible", "super hot", 'whether changer'];
    model = new Hero(12, 'Dr IQ', this.powers[0], 'chuck overstreet');

    submitted = false;
    onSubmit() {
        this.submitted = true;
    }


    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }

    newHero(){
        this.model=new Hero(42,'','');
    }
}