import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot, CanActivate, UrlTree, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService implements CanActivateChild{

  constructor(private router:Router) {}

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{
    if (sessionStorage.getItem('name') != null && sessionStorage.getItem('email') != null && sessionStorage.getItem('password') != null){
      return true;
    }else {
      this.router.navigateByUrl('/registration');
      return false;
    }
  }
}
