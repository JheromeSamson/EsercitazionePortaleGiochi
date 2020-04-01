import { Component, OnInit, Input, Output } from '@angular/core';
import { GiochiItem } from 'src/app/model/giochi-item';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { GameListService } from 'src/app/service/gamelist/game-list.service';
import { switchMap } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { GestoreImmagineService } from 'src/app/service/immagine/gestore-immagine.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {

gameIndex$;

 routeSub: Subscription;
@Input() childMessage;

appoggio: GiochiItem;

immagine: string;

constructor(private route: ActivatedRoute,
            private router: Router,
            private service: GameListService,

            private immagineService: GestoreImmagineService) {}

ngOnInit() {
/*
  let id = this.route.snapshot.paramMap.get('id');
  this.gameIndex$ = this.service.getGameListById(id);
*/
  this.routeSub = this.route.params.subscribe(params => {

    this.gameIndex$ = this.service.getGameListById(params.id);
    console.log(this.gameIndex$);
    this.getImmagine();

  });
}

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  getImmagine() {
  this.immagine = '../../assets/immagini/giochi/' + this.gameIndex$.immagine + '.png';
  }

}
