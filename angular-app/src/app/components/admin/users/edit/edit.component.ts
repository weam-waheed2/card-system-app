import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Data } from '../../../../auth/auth';
import { AdminService } from '../../../admin.service';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {

  id!:number;
  users!:Data;
  form!:FormGroup;

  constructor(public adminService:AdminService, private router:Router, private route:ActivatedRoute){

  }

  ngOnInit():void{
    this.id = this.route.snapshot.params['userId'];
    this.adminService.find(this.id).subscribe((data:Data)=>{
      this.users = data;
    });

    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required),
      is_active: new FormControl(''),
    })
  }

  get f(){
    return this.form.controls;
  }
  submit(){
    this.adminService.update(this.id,this.form.value).subscribe((res:any)=>{
      this.router.navigateByUrl('admin/users')
    })
  }

}
