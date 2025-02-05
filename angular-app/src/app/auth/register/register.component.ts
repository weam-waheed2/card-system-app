import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm!: FormGroup;
  errorMessage: string = '';

  constructor( public authService:AuthService, private router:Router){

  }

  ngOnInit():void{
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required),
      role:new FormControl('user'),
      is_active:new FormControl('1'),

    })
  }

  get f(){
    return this.registerForm.controls;
  }

  submit(){
    console.log(this.registerForm.value);
    this.authService.register(this.registerForm.value).subscribe((res:any)=>{
      if (this.registerForm.valid) {
        console.log(this.registerForm.value);
        this.authService.login(this.registerForm.value).subscribe(
          response => {
            localStorage.setItem('token', response.token);
            localStorage.setItem('user', JSON.stringify(response.user));
            this.router.navigate([response.user.role === 'user' ? '/dashboard' : '/login']);
          },
          error => {
            this.errorMessage = 'Invalid credentials or server error'; 
            console.error(error);
          }
        );
      }
    })
  }
}
