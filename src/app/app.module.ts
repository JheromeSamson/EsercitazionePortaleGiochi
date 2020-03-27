import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MenuComponent } from './component/menu/menu.component';
import { HomeComponent } from './component/home/home.component';
import { GameListComponent } from './component/game-list/game-list.component';
import { GameDetailComponent } from './component/game-detail/game-detail.component';
import { GameEditComponent } from './component/game-edit/game-edit.component';
import { RoutingModule } from './app-routing.module';
import { RegistrationComponent } from './component/registration/registration.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './component/header/header.component';
import { LoginComponent } from './component/login/login.component';
import { UserService } from './service/user/user.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    GameListComponent,
    GameDetailComponent,
    GameEditComponent,
    RegistrationComponent,
    HeaderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
