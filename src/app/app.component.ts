import { Component } from '@angular/core';
 import { FormGroup,FormControl } from '@angular/forms';
import { SubjectobservableService } from './services/subjectobservable.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[SubjectobservableService]
})
export class AppComponent {
  title = 'forms';
  
  constructor(private data:SubjectobservableService)
  {


  }


}
