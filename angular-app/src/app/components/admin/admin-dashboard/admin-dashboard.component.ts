import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Data } from '../../../auth/auth';
import { AdminService } from '../../admin.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CommonModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent{
    users: Data[] = [];
    userName: string | null = '';

    constructor(public adminService: AdminService,public auth:AuthService) {
      this.userName = this.auth.getUserName();
    }
    
    ngOnInit(): void {
      this.adminService.getUsers().subscribe((user:Data[])=>{
        this.users = user;
      })
    }
}