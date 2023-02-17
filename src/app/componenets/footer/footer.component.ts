import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  users:any ;
  constructor(private userData:UserDataService) {
    console.warn("userdata ",userData.users())
    this.users=userData.users();
   }

  ngOnInit(): void {
  }

}
