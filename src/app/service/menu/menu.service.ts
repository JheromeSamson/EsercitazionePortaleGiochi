import { Injectable } from '@angular/core';
import { HomeComponent } from 'src/app/component/home/home.component';
import { MenuItem } from 'src/app/model/menu-item-interface';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menuItems: MenuItem[] = [{
    id:1,
    description: 'Home',
    selected: true
  },
  {
    id:2,
    description: 'Lista Videogiochi',
    selected: false
  },
  {
    id:3,
    description: 'Modifica',
    selected: false
  }];

}
