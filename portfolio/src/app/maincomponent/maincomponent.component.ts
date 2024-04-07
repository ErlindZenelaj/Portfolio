import {AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, OnInit} from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {CommonModule} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import { register } from 'swiper/element/bundle';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-maincomponent',
  standalone: true,
  imports: [
    HeaderComponent,
    CommonModule,
    RouterLink,
    ReactiveFormsModule,
  ],
  templateUrl: './maincomponent.component.html',
  styleUrl: './maincomponent.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class MaincomponentComponent implements OnInit , AfterViewInit{
  title = 'portfolio';
  showMessage = true;

  contactForm: FormGroup;

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
    } else {
      this.contactForm.markAllAsTouched();
    }
  }

  constructor(private fb: FormBuilder, private elementRef: ElementRef) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }


  cards = [
    { icon: 'assets/img/speed.svg', title: 'Fast', description: 'Fast load times and lag free interaction, my highest priority.' },
    { icon: 'assets/img/pc&laptop.svg', title: 'Responsive', description: 'My layouts will work on any device, big or small.' },
    { icon: 'assets/img/lamp.svg', title: 'Intuitive', description: 'Strong preference for easy to use, intuitive UX/UI.' },
    { icon: 'assets/img/rocket.svg', title: 'Dynamic', description: 'Websites don\'t have to be static, I love making pages come to life.' }
  ];

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
