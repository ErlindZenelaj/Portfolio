import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {CommonModule} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-maincomponent',
  standalone: true,
  imports: [
    HeaderComponent,
    CommonModule,
    RouterLink
  ],
  templateUrl: './maincomponent.component.html',
  styleUrl: './maincomponent.component.scss'
})
export class MaincomponentComponent implements OnInit{
  title = 'portfolio';
  showMessage = true;

  ngOnInit() {
    setInterval(() => {
      this.showMessage = !this.showMessage;
    }, 2500);
  }
}
