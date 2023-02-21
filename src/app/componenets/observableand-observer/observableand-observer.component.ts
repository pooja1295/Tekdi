import { Component, OnInit } from '@angular/core';
import { ObservableandObserverserviceService } from 'src/app/services/observableand-observerservice.service';
import { Users } from 'src/app/User';

@Component({
  selector: 'app-observableand-observer',
  templateUrl: './observableand-observer.component.html',
  styleUrls: ['./observableand-observer.component.css']
})
export class ObservableandObserverComponent implements OnInit {
  test: any;

  constructor(private dataservice: ObservableandObserverserviceService) { }

  //This is observer

  ngOnInit(): void {

    this.dataservice.getUser().subscribe((users:any)=>{
      this.test=users;

      console.log('this.test', this.test);

    })
  }

}
