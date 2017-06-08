import { Injectable } from '@angular/core';
import {Subject,Observable,Observer} from 'rxjs/Rx';
import {WebSocketService} from './websocket.service';
import{Message} from './message';

const CHAT_URL="";
@Injectable()
export class ChatService{
  public messages:Subject<Message>;
  constructor(private wsService:WebSocketService){

    this.messages=<Subject<Message>>wsService.connect(CHAT_URL).map((response:MessageEvent):Message=>{

      let data = JSON.parse(response.data);
                return {
                    from: data.from,
                    text: data.text,
                    time:data.time
                }
    });
  }
  
}