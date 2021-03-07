import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup;
  constructor(private user: UserService, private fb: FormBuilder) {
    // this.LoginForm=this.fb.group({
    //   email: '',
    //   password: ''
    // })
   }

  ngOnInit(): void {
  }
  
  onSubmitForm(){
    // let data= this.LoginForm.value
    // console.log(data)
    // this.user.createUser1(data).subscribe(result=>{
    //   console.log(data)
    // })
  }

}
