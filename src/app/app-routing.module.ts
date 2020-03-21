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

        { path: 'menu', component: MenuComponent, canActivate: [AuthorizationService]},
        { path: 'home', component: HomeComponent, canActivate: [AuthorizationService]},
        { path: 'game-list', component: GameListComponent, canActivate: [AuthorizationService]},
        { path: 'game-detail', component: GameDetailComponent, canActivate: [AuthorizationService]},
        { path: 'game-edit', component: GameEditComponent, canActivate: [AuthorizationService]},
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
