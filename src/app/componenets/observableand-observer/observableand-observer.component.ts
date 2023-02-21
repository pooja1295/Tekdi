import { Component, OnDestroy, OnInit } from '@angular/core';
import { count } from 'console';
import { interval, Subscription } from 'rxjs';
import { ObservableandObserverserviceService } from 'src/app/services/observableand-observerservice.service';
import { Users } from 'src/app/User';

@Component({
  selector: 'app-observableand-observer',
  templateUrl: './observableand-observer.component.html',
  styleUrls: ['./observableand-observer.component.css']
})
export class ObservableandObserverComponent implements OnInit ,OnDestroy{
  test: any;

  //for unsubscribe
  counterObservable=interval(1000);
  counterSub: Subscription | any;
  userData:Subscription | any;

  constructor(private dataservice: ObservableandObserverserviceService) { }
 

  //This is observer (not unsubscribe)

  ngOnInit(): void {

    //this is angular feature
    this.userData=this.dataservice.getUser().subscribe((users:any)=>{
      this.test=users;

      console.log('this.test', this.test);

    })

    //Unsubscribe Rest API
    






    //To understand subscribe and unsubscribe taking here exapke
    //interval is observable of rxjs library

    this.counterSub=this.counterObservable.subscribe((count)=>{
    console.log(count);
     })
}
ngOnDestroy(){
  this.counterSub.unsubscribe();
  this.userData.unsubscribe();
}

}
