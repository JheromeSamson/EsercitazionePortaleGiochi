import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './component/menu/menu.component';
import { HomeComponent } from './component/home/home.component';
import { GameListComponent } from './component/game-list/game-list.component';
import { GameDetailComponent } from './component/game-detail/game-detail.component';
import { GameEditComponent } from './component/game-edit/game-edit.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { AuthorizationService } from './service/auth/authorization.service';



const appRoutes: Routes = [

    { path: 'portale', canActivateChild: [AuthorizationService], children: [
        { path: 'menu', component: MenuComponent},
        { path: 'home', component: HomeComponent},
        { path: 'game-list', component: GameListComponent},
        { path: 'game-detail', component: GameDetailComponent},
        { path: 'game-edit', component: GameEditComponent}
    ]},
    { path: 'registration', component: RegistrationComponent}
];

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class RoutingModule{}
