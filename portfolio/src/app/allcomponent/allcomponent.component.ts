import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {HomeComponent} from "../home/home.component";
import {RouterModule, RouterOutlet} from "@angular/router";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-allcomponent',
  standalone: true,
  imports: [RouterModule,RouterOutlet, HeaderComponent, FontAwesomeModule, HomeComponent],
  templateUrl: './allcomponent.component.html',
  styleUrl: './allcomponent.component.scss'
})
export class AllcomponentComponent implements OnInit{
  title = 'portfolio';
  showIntro = true;

  ngOnInit() {
    setTimeout(() => {
      this.showIntro = false;
    }, 4000);
  }
}
