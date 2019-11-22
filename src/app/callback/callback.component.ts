import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth-service.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  // tslint:disable-next-line: variable-name
  constructor( private _authService: AuthService) { }

  ngOnInit() {
    this._authService.handleAuth();
  }

}
