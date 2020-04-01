import {Component, OnInit, Output} from '@angular/core';
import { User } from 'src/app/model/user';
import {UserService} from '../../service/user/user.service';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import giochiList from 'src/assets/file/gameList.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user;
  name;
  loggato = false;
  cerca: string;
  listaGiochi;

  myControl = new FormControl();
  options: string[] = ['Sparatutto in terza persona', 'Sparatutto in prima persona', 'Sandbox',
    'Azione', 'Avventura', 'Sport', 'Action RPG', 'Simulatore di vita', 'MMORPG',
    'Simulatore di guida', 'Avventura dinamica', 'Sport', 'Survival horror', 'Strategia'];
  filteredOptions: Observable<string[]>;


  constructor() {
    this.getUtenteLoggato();
    this.listaGiochi = giochiList;

  }
  ngOnInit(): void {
    this.getUtenteLoggato();

    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  search() {
    console.log(this.listaGiochi);
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.listaGiochi.length; i++) {
      const attualeGioco = this.listaGiochi[i];
      console.log('genere ' + attualeGioco.genere);
      let attualeGenere = attualeGioco.genere;
      if ( attualeGenere.search(this.cerca)) {
        console.log('Genere trovato: ' );
      }

    }
  }

  logout() {
    sessionStorage.clear();
    this.user = null;
    this.loggato = false;
    this.refresh();
  }

  getUtenteLoggato() {
    if (sessionStorage.getItem('user') != null) {
      this.user = JSON.parse(sessionStorage.getItem('user'));
      this.name = this.user.name;
      this.loggato = true;
    }
  }

  refresh(): void {
    window.location.reload();
}

}
