import {Directive,ElementRef,Input} from '@angular/core';

@Directive({selector:'[allHighlight]'})
export class HighlightDirective{
    constructor(el:ElementRef){
        el.nativeElement.style.backgroundColor='red';
    }
}