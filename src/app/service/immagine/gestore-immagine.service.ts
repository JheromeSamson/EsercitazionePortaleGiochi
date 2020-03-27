import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GestoreImmagineService {

  constructor() { }


  prendiImmagine(nomeFoto: string){

    return "./src/app/assets/immagini/giochi/"+ nomeFoto +".png";
  }
}
