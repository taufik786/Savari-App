import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userData : any[]=[]
  constructor(private user: UserService) { }

  ngOnInit(): void {
    this.getUserdata()
  }
  // showMe:boolean=false
  // toggleShedule(){
  //   this.showMe = !this.showMe
  // }

  getUserdata(){
    this.user.getUser().subscribe(result=>{
      console.log(result);
      this.userData=result
    })
  }

}
