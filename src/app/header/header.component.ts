import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SimpleEventAggregator } from '../services/inject-pub-sub.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  pageTitle = 'Customer Manager';
  constructor(private router: Router, private eventAggregator: SimpleEventAggregator) { }
  public isUserLoggedIn: boolean;
  public email: string;

  ngOnInit() {
    this.eventAggregator.subscribe(this.eventHandler);
    this.email = localStorage.getItem('email');
    if (this.email != null) {
      console.log('True');
      this.isUserLoggedIn = true;
    }
    }
    private eventHandler = (a) => {
      this.email = a;
      console.log('Email:' + this.email);
      if (this.email != null) {
      console.log('True');
      this.isUserLoggedIn = true;
    }
      }
  logout() {
    this.isUserLoggedIn = false;
    this.router.navigate(['/customers']);
    localStorage.clear();
  }


}
