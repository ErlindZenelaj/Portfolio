import {Component, ElementRef, OnInit} from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {CommonModule} from "@angular/common";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-maincomponent',
  standalone: true,
  imports: [
    HeaderComponent,
    CommonModule,
    RouterLink,
  ],
  templateUrl: './maincomponent.component.html',
  styleUrl: './maincomponent.component.scss'
})
export class MaincomponentComponent implements OnInit {
  title = 'portfolio';
  showMessage = true;


  constructor(private router: Router, private elementRef: ElementRef) {
  }

  ngOnInit() {
    setInterval(() => {
      this.showMessage = !this.showMessage;
    }, 2500);
  }
}
