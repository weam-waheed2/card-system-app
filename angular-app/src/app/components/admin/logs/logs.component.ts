import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AdminService } from '../../admin.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logs',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './logs.component.html',
  styleUrl: './logs.component.css'
})
export class LogsComponent implements OnInit{
  logs: any[] = [];
  currentPage = 1;
  totalPages = 1;
  perPage = 10;
    
  constructor(
    private adminService: AdminService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getLogs();
    this.loadLogs();
  }
  getLogs() {
    this.adminService.getLogs().subscribe(logs => {
      this.logs = logs;
    });
  }

  loadLogs(page: number = 1) {
    this.adminService.getLogs(page, this.perPage).subscribe(response => {
      this.logs = response.data;
      this.currentPage = response.current_page;
      this.totalPages = response.last_page;
    });
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.loadLogs(this.currentPage + 1);
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.loadLogs(this.currentPage - 1);
    }
  }
}
