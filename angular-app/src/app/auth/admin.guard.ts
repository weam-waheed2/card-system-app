import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        const token = localStorage.getItem('token');
        if (token) {
        const user = JSON.parse(localStorage.getItem('user') || '{}');
        if (user && user.role === 'admin') {
            return true;
        } else {
            this.router.navigate(['/dashboard']); // Redirect to user dashboard
            return false;
        }
        } else {
        this.router.navigate(['/login']);
        return false;
        }
    }
}
