import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import  giochiList  from 'src/assets/file/gameList.json';
import { GameEditComponent } from '../game-edit/game-edit.component';
import { GiochiItem } from 'src/app/model/giochi-item';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { GameListService } from 'src/app/service/gamelist/game-list.service';
import { switchMap } from 'rxjs/operators';



@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
})
export class GameListComponent implements OnInit {

  @Output()
 gameDetail;

    public gameList:{
              id: string,
              title: string, 
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
