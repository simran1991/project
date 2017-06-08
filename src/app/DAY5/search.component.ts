import { Component } from '@angular/core';
import{ SharedService } from './shared.service';

@Component({
  selector: 'search-component',
  templateUrl: './search.component.html',
  
})
export class SearchComponent{
    searchText:String;
    size:number;
    changeClass:boolean;
    display:boolean;
    constructor(private service:SharedService){
        this.size=10;
    }
    searchData(){
        console.log("emitting "+this.searchText);
        this.service.notifyComponents(this.searchText);
    }   
    increment(){
        console.log(this.size);
        this.size=this.size+1;
    } 
    
    decrement(){
        this.size=this.size-1;
    } 
}