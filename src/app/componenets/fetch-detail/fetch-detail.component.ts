import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fetch-detail',
  templateUrl: './fetch-detail.component.html',
  styleUrls: ['./fetch-detail.component.css']
})
export class FetchDetailComponent implements OnInit {


  memberData=[
  {name:'pooja',email:'pooja@123'},
  {name:'varsha',email:'varsha@123'},
  {name:'navin',email:'navin@123'},
  {name:'rahul',email:'rahu@123'},



  ]

  constructor() { }

  ngOnInit(): void {
  }

}
