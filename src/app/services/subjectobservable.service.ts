import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectobservableService {

  //used for event emmiter
  //dataEmitter=new EventEmitter<any>();


  //used for subject
  dataEmitter=new Subject<any>();



  raiseDataEmittterEvent(data:any)
  {

    //used fr emit event
    //this.dataEmitter.emit(data);

    //used for subject
    this.dataEmitter.next(data);

  }

  constructor() { }



}
