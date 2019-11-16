import { Injectable } from '@angular/core';
import { CanActivate, RouteConfigLoadEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginguardService implements CanActivate {
  constructor( private router: Router ) {}
  canActivate() {
    if (localStorage.length === 0) {
     this.router.navigate(['/Login']);
    }
    return true;
  }
}
