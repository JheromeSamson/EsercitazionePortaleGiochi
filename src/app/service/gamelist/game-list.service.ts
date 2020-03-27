import { Injectable } from '@angular/core';
import { GiochiItem } from 'src/app/model/giochi-item';
import  giochiList  from 'src/assets/file/gameList.json';

@Injectable({
  providedIn: 'root'
})
export class GameListService {

  public gameList:GiochiItem[];

constructor(){
  this.gameList = giochiList;
}

  getGameList(){
    return this.gameList;
  }
  getGameListById(id: string){

    return this.gameList[id];
  }
}
