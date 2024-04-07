import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-firstpage',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './firstpage.component.html',
  styleUrl: './firstpage.component.scss'
})
export class FirstpageComponent  implements OnInit{
  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/main']);
    }, 3000);
  }
}
