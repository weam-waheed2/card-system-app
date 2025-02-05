import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthGuard } from './auth/auth.guard';
import { AdminGuard } from './auth/admin.guard';
import { DashboardComponent } from './components/user/dashboard/dashboard.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { UsersComponent } from './components/admin/users/users.component';
import { LogsComponent } from './components/admin/logs/logs.component';
import { CardsComponent } from './components/user/cards/cards.component';
import { CreateComponent } from './components/admin/users/create/create.component';
import { EditComponent } from './components/admin/users/edit/edit.component';
import { CreateCardComponent } from './components/user/cards/create-card/create-card.component';
import { ViewCardComponent } from './components/user/cards/view-card/view-card.component';
import { EditCardComponent } from './components/user/cards/edit-card/edit-card.component';
import { SorryComponent } from './components/sorry/sorry.component';

export const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent},
    { path: 'sorry', component: SorryComponent},


    { path: 'dashboard', canActivate: [AuthGuard] ,
        children: [
            { path: '', component: DashboardComponent },
            { path: 'cards',
                children: [
                    {path: '', component: CardsComponent},
                    {path:'create',component:CreateCardComponent },
                    {path: 'view/:id', component: ViewCardComponent },
                    {path:':cardId',component:EditCardComponent },
                ],
            },
        ]
    },
    
    // Admin Routes
    { path: 'admin', canActivate: [AdminGuard] ,
        children: [
            { path: '', component: AdminDashboardComponent },
            { path: 'users',
                children: [
                    {path: '', component: UsersComponent},
                    {path:'create',component:CreateComponent },
                    {path:':userId',component:EditComponent },
                ],
            },
            { path: 'logs', component: LogsComponent },
            { path: 'cards', component: CardsComponent }
        ]
    },

    { path: '**', redirectTo: 'login' }
];
