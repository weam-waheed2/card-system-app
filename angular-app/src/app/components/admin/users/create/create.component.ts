import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AdminService } from '../../../admin.service';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,RouterLink],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  formCreate!:FormGroup;

  constructor( public adminService:AdminService, private router:Router){

  }

  ngOnInit():void{
    this.formCreate = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password:new FormControl('',Validators.required),
      role:new FormControl('',Validators.required)
    })
  }

  get f(){
    return this.formCreate.controls;
  }

  submit(){
    this.adminService.create(this.formCreate.value).subscribe((res:any)=>{
      this.router.navigateByUrl('admin/users');
    })
  }
}
