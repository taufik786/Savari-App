import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  RegisterForm: FormGroup
  showError: string;
  constructor(private user: UserService, private fb: FormBuilder) {
    this.RegisterForm =this.fb.group({
      name: ['',Validators.required],
      email: ['',Validators.required],
      phone: ['',Validators.required],
      password: ['',Validators.required],
      cnfpassword: ['', [Validators.required, Validators.minLength(8),
        Validators.maxLength(10)]]
      }, { validator: this.passwordsMatchValidator })
   
   }
   

  ngOnInit(): void {
  }

  private passwordsMatchValidator(form: FormGroup) {
    if (form.get('password') && form.get('cnfpassword')) {
      return form.get('password').value === form.get('cnfpassword').value ? null : { mismatch: true };
    }
    return null;
}

  SubmitForm(){
    let data=this.RegisterForm.value
    console.log(data)
    this.user.createUser(data).subscribe(result=>{
      if(this.RegisterForm != this.RegisterForm){
        console.log('not match')
      }
      // console.log()
    }
    // , error=>{
    //   if(error.error=="INVALID_CREDENTIALS_FORMAT"){
    //     this.showError=`Passowrd doesn't match`
    //   }
    // }
    )
    this.RegisterForm.reset()
  }
  

}
