import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }

  //Create a function for get user service
  users(){
    return [{name:'pooja',address:'pune'},
    {name:'varsha',address:'pune'},
    {name:'Navin',address:'Indore'}
  
  ]
  } 
}
