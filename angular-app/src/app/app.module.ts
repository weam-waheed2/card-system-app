import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AuthService } from './auth/auth.service';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { LogsComponent } from './components/admin/logs/logs.component';
import { UsersComponent } from './components/admin/users/users.component';
import { CreateComponent } from './components/admin/users/create/create.component';
import { EditComponent } from './components/admin/users/edit/edit.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CardsComponent } from './components/user/cards/cards.component';
import { CreateCardComponent } from './components/user/cards/create-card/create-card.component';
import { EditCardComponent } from './components/user/cards/edit-card/edit-card.component';
import { ViewCardComponent } from './components/user/cards/view-card/view-card.component';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';


@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    LogsComponent,
    UsersComponent,
    CreateComponent,
    EditComponent,
    LoginComponent,
    RegisterComponent,
    CardsComponent,
    CreateCardComponent,
    EditCardComponent,
    ViewCardComponent
  ],
  imports: [
    BrowserModule,
    NgxQRCodeModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
