import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiLoginService } from 'src/app/services/api-login.service';
import { Usuario } from 'src/app/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  formLogin;
  isValid: boolean = true;
  isRembemerSesion: boolean = false;

  constructor(
    private AuthService : ApiLoginService,
    private formBuilder: FormBuilder,
    public router: Router) {

    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

 

  ngOnInit(): void {
  }

  loginUser() {
    
    this.isValid = !this.formLogin.invalid;
    if(this.isValid){
      this.AuthService.loginUser(this.formLogin.value as Usuario).subscribe((response : any) => {
        if(this.isRembemerSesion){
          localStorage.setItem("Auth-Sesion", "true");
          localStorage.setItem("Email", this.formLogin.value.email);
        }
        this.router.navigate(['']);
      })
    }
  }
}
