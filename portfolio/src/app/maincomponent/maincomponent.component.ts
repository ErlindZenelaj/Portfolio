import {AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, OnInit} from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {CommonModule} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import { register } from 'swiper/element/bundle';

@Component({
  selector: 'app-maincomponent',
  standalone: true,
  imports: [
    HeaderComponent,
    CommonModule,
    RouterLink,
  ],
  templateUrl: './maincomponent.component.html',
  styleUrl: './maincomponent.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class MaincomponentComponent implements OnInit , AfterViewInit{
  title = 'portfolio';
  showMessage = true;


  constructor(private router: Router, private elementRef: ElementRef) {
  }

  ngOnInit() {
    setInterval(() => {
      this.showMessage = !this.showMessage;
    }, 2500);
  }

  ngAfterViewInit() {
    const logosSlide = this.elementRef.nativeElement.querySelector('.logos-slide');
    const copy = logosSlide.cloneNode(true);
    this.elementRef.nativeElement.querySelector('.logos').appendChild(copy);
  }

  iconss: string[] = [
    'assets/img/html.png',
    'assets/img/css.png',
    'assets/img/js.png',
    'assets/img/angular.png',
    'assets/img/dotnet.png',
    'assets/img/sql.png'
  ];
}
register();
