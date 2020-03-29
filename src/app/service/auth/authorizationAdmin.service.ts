import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot, CanActivate, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationAdminService implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const user = JSON.parse(sessionStorage.getItem('user'));
    if (user.name === 'Admin') {
      console.log( 'SONO NELL\'AUTH' + sessionStorage.getItem('name'));
      return true;
    } else {
      this.router.navigateByUrl('/registration');
      return false;
    }
  }
}
