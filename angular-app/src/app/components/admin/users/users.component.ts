import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AdminService } from '../../admin.service';
import { Data } from '../../../auth/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{
  users: Data[] = [];
  
  constructor(
    public adminService: AdminService,
  ) {}

  ngOnInit(): void {
    this.adminService.getUsers().subscribe((user:Data[])=>{
      this.users = user;
    })
  }

  deleteUser(id:number){
    if(confirm('Are you sure you want to delete?')){
      this.adminService.delete(id).subscribe(res =>{
        this.users = this.users.filter(item=>item.id !==id);
      })
    }
  }

}
