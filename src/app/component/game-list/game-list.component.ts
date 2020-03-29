import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import giochiList from 'src/assets/file/gameList.json';


@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
 // providers: [ NgbCarouselConfig]
})
export class GameListComponent implements OnInit {

  @Output()
 gameDetail;

    public gameList: {
              id: string,
              title: string,
              genere: string,
              origine: string,
              sviluppo: string,
              publicazione: string,
              modalitaGioco: string}[];
  constructor() {
   this.gameList = giochiList;
  }

  ngOnInit(): void {
  }

}
