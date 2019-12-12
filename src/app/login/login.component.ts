import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomersServices } from '../services/customers-services.service';
import { ICustomer } from '../modal/customer';
import { IProfile } from '../modal/profile';
import { SimpleEventAggregator } from '../services/inject-pub-sub.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  showSignIn = true;
  SignIn  = 1;
  showSignUp = false;
  SignUp = 2;
  // tslint:disable-next-line: max-line-length tslint:disable-next-line: variable-name
  constructor(private _custoomerServices: CustomersServices, private eventAggregator: SimpleEventAggregator, private fb: FormBuilder, private router: Router) { }
  userprofile: IProfile[];
  profileData: IProfile;
  Email: string;
  password: string;
  LoginForm: FormGroup;

  ngOnInit() {
    this.LoginForm = this.fb.group({
      email: '',
      password: ''
      });
    this._custoomerServices.getProfile().subscribe((userprofile: IProfile[]) => {
      this.userprofile = userprofile;
  });
  }
  checkData = () => {
    // tslint:disable-next-line: max-line-length
    this.profileData = this.userprofile.filter((userprofile: IProfile) => {
      if (userprofile.email === this.Email && userprofile.password === this.password) {
        console.log('if');
        return userprofile;
      }
    })[0];
    console.log(this.profileData + 'data');
    if ( this.profileData ) {
      console.log('Find');
      this.eventAggregator.publish(this.profileData.email);
      localStorage.setItem('email', this.profileData.email);
      this.router.navigate(['./newCustomer']);
    }
   }

   showOrHide = (n: number) => {
    if (n === 1 && this.showSignIn === false) {
      this.showSignIn = !this.showSignIn;
      this.showSignUp = !this.showSignUp;
    }
    if (n === 2 && this.showSignUp === false) {
      this.showSignIn = !this.showSignIn;
      this.showSignUp = !this.showSignUp;
    }
    }

}
