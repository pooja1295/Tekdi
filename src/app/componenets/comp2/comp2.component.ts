import { Component, OnInit } from '@angular/core';
import { SubjectobservableService } from 'src/app/services/subjectobservable.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  constructor(private data:SubjectobservableService) 
  {


   }

  ngOnInit(): void {

    this.data.dataEmitter.subscribe((value)=>{
      this.inputText=value;
    }
    
    
    )
  }

  inputText:any;

}
