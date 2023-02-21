  import { Component, OnInit } from '@angular/core';
import { SubjectobservableService } from 'src/app/services/subjectobservable.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor(private data:SubjectobservableService) { }

  ngOnInit(): void {
  }

  enteredText:any;
  
  onBtnclick(){
    //console.log(this.enteredText);
    this.data.raiseDataEmittterEvent(this.enteredText);
    


  }

}
