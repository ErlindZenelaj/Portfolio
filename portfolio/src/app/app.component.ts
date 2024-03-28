import {Component, OnInit} from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {HomeComponent} from "./home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,RouterOutlet, HeaderComponent, FontAwesomeModule, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'portfolio';
  showIntro = true;

  ngOnInit() {
    setTimeout(() => {
      this.showIntro = false;
    }, 4000);
  }
}
