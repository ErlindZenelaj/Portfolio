import { Component } from '@angular/core';
import {HeaderComponent} from "../header/header.component";

@Component({
  selector: 'app-maincomponent',
  standalone: true,
    imports: [
        HeaderComponent
    ],
  templateUrl: './maincomponent.component.html',
  styleUrl: './maincomponent.component.scss'
})
export class MaincomponentComponent {
  title = 'portfolio';
  showMessage = true;

  ngOnInit() {
    setTimeout(() => {
      this.showMessage = false;
    }, 2500);
  }
}
