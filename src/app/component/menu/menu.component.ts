import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/model/menu-item-interface';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {


  items: MenuItem[] = [
    {id: 1, description: 'HOME', url: 'portale/home'},
    {id: 2, description: 'GAME LIST', url: 'portale/game-list'},
    {id: 3, description: 'MODIFICA ', url: 'portale/game-edit'},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }


}
