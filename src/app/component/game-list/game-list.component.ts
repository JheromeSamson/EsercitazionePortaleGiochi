import { Component, OnInit } from '@angular/core';
import { GiochiItem } from 'src/app/model/giochi-item';
import { from } from 'rxjs';
import  giochiList  from 'src/assets/file/gameList.json';


@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

    public gameList:{title: string, 
              genere: string, 
              origine: string, 
              sviluppo: string, 
              publicazione: string, 
              modalitaGioco: string}[];
  constructor(){
    this.gameList = giochiList;
  }

  ngOnInit(): void {
  }


  

}
