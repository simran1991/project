import { Component , Input,Output,EventEmitter} from '@angular/core';
@Component({
  selector: 'child-component',
  templateUrl: './child.component.html',
  
})
export class ChildComponent{
    @Input() counter:number;
    @Output() updateCounter=new EventEmitter<any>();

increment(){
        this.counter++;
        this.updateCounter.emit(this.counter);
    }
}
