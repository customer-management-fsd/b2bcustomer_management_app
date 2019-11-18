import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.init();
  }


    init() {
        document.querySelector('.arrow-left').addEventListener('click', this.clickArrowLeft);
        document.querySelector('.arrow-right').addEventListener('click', this.clickArrowRight);
    }

    clickArrowLeft(event) {
    const carousel = document.querySelector('.carousel');

    if (carousel.classList.contains('page4')) {
        carousel.classList.remove('page4');
    } else if (carousel.classList.contains('page3')) {
        carousel.classList.remove('page3');
    } else if (carousel.classList.contains('page2')) {
        carousel.classList.remove('page2');
    } else if (carousel.classList.contains('page1')) {
      carousel.classList.remove('page1');
  }

    event.preventDefault();
    }


    clickArrowRight(event) {
    const carousel = document.querySelector('.carousel');

    if (carousel.classList.contains('page3')) {
        carousel.classList.add('page4');
    } else if (carousel.classList.contains('page2')) {
        carousel.classList.add('page3');
    } else {
        carousel.classList.add('page2');
    }

    event.preventDefault();
    }

}
