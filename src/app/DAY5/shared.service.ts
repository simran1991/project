import {Injectable,EventEmitter} from '@angular/core';

@Injectable()
export class SharedService{
    public onSearchText$:EventEmitter<any>;//using $ is convention if we are using event emitter

    constructor(){
        this.onSearchText$=new EventEmitter();
    }

    public notifyComponents(searchInput:String){
        this.onSearchText$.emit(searchInput);
    }
}