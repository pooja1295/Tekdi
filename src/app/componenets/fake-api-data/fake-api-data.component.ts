import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from 'src/app/services/customer-service.service';


@Component({
  selector: 'app-fake-api-data',
  templateUrl: './fake-api-data.component.html',
  styleUrls: ['./fake-api-data.component.css']
})
export class FakeApiDataComponent implements OnInit {

  customer:any;

  constructor(private customerData:CustomerServiceService) 
  {

    customerData.users().subscribe((data)=>{
      console.warn("data",data);
      this.customer=data;



    }
    
    
    )

   }

  ngOnInit(): void {
  }

}
