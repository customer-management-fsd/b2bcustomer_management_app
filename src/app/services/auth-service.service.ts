import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs';
import * as auth0 from 'auth0-js';
import { SimpleEventAggregator } from './inject-pub-sub.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

auth0 = new auth0.WebAuth({
clientID: 'i54wZ1x8FVrC99011cb8KDc76T9WTDUu',
domain: 'dev-d838wneq.auth0.com',
responseType: 'token id_token',
audience: 'http://localhost:8081',
redirectUri: 'http://localhost:4200/callback',
scope: 'openid profile view:registration view:registrations'
});
loggingIn: boolean;

constructor(public router: Router, private eventAggregator: SimpleEventAggregator) {}

public login(): void {
    this.auth0.authorize();
}

handleAuth() {
    // When Auth0 hash parsed, get profile
    this.auth0.parseHash((err, authResult) => {
    if (authResult && authResult.accessToken) {
    window.location.hash = '';
    this._getProfile(authResult);
    } else if (err) {
    console.error(`Error authenticating: ${err.error}`);
    }
    this.router.navigate(['/']);
    });
    }

    private _getProfile(authResult) {
    this.loggingIn = true;
    // Use access token to retrieve user's profile and set session
    this.auth0.client.userInfo(authResult.accessToken, (err, profile) => {
    if (profile) {
    this.setSession(authResult);
    console.log(authResult);
    } else if (err) {
    console.warn(`Error retrieving profile: ${err.error}`);
    }
    });
   }

private setSession(authResult): void {
// Set the time that the access token will expire at
const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
localStorage.setItem('access_token', authResult.accessToken);
localStorage.setItem('id_token', authResult.idToken);
localStorage.setItem('expires_at', expiresAt);
localStorage.setItem('name', authResult.idTokenPayload.given_name);
console.log(authResult.idTokenPayload.given_name);
this.eventAggregator.publish(authResult.idTokenPayload.given_name);
}

public logout(): void {
// Remove tokens and expiry time from localStorage
localStorage.removeItem('access_token');
localStorage.removeItem('id_token');
localStorage.removeItem('expires_at');
// Go back to the home route
this.router.navigate(['/']);
}

public isAuthenticated(): boolean {
// Check whether the current time is past the
// access token's expiry time
console.log('first');
const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
return new Date().getTime() < expiresAt;
}

}

