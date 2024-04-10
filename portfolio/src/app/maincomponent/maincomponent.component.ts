import {AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {CommonModule} from "@angular/common";
import { RouterLink} from "@angular/router";
import { register } from 'swiper/element/bundle';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import AOS from 'aos';
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'


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
  @ViewChild('mouse') mouseElement!: ElementRef;
  contactForm: FormGroup;
  showMessage = true;



  ngOnInit() {
    setInterval(() => {
      this.showMessage = !this.showMessage;
    }, 2500);
  }

  ngAfterViewInit() {
    AOS.init({
      disable: false,
      startEvent: 'DOMContentLoaded',
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate',
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,

      offset: 120,
      delay: 0,
      duration: 400,
      easing: 'ease',
      once: false,
      mirror: false,
      anchorPlacement: 'top-bottom',
    });
    const logosSlide = this.elementRef.nativeElement.querySelector('.logos-slide');
    const copy = logosSlide.cloneNode(true);
    this.elementRef.nativeElement.querySelector('.logos').appendChild(copy);
  }


  constructor(private fb: FormBuilder, private elementRef: ElementRef) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  async send() {
    emailjs.init('4ZbHd-gHHL8t7uDGC');
    let response = await emailjs.send("service_p1mlxvm", "template_6l4t5wf", {
      name: this.contactForm.value.name,
      subject: this.contactForm.value.subject,
      message: this.contactForm.value.message,
    });
    await Swal.fire({
      icon: "success",
      title: "Your form has been send!",
      showConfirmButton: false,
      timer: 1500
    });
    this.contactForm.reset();
  }

  onSubmit(event: Event) {
    event.preventDefault();
    if (this.contactForm.valid) {
      this.send();
    } else {
      this.contactForm.markAllAsTouched();
    }
  }




  scrollToBottom() {
    const windowHeight = window.innerHeight;
    const scrollHeight = document.body.scrollHeight;
    const distanceToScroll = scrollHeight - windowHeight;

    const duration = 17000;
    const steps = 200;
    const scrollStep = distanceToScroll / steps;
    const timePerStep = duration / steps;

    let scrollCount = 0;
    let currentTime = 0;

    function animateScroll() {
      if (scrollCount < distanceToScroll) {
        window.scrollBy(0, scrollStep);
        scrollCount += scrollStep;
        setTimeout(animateScroll, timePerStep);
      }
    }

    animateScroll();
  }



  cards = [
    { icon: 'assets/img/speed.svg', title: 'Fast', description: 'Fast load times and lag free interaction, my highest priority.' },
    { icon: 'assets/img/pc&laptop.svg', title: 'Responsive', description: 'My layouts will work on any device, big or small.' },
    { icon: 'assets/img/lamp.svg', title: 'Intuitive', description: 'Strong preference for easy to use, intuitive UX/UI.' },
    { icon: 'assets/img/rocket.svg', title: 'Dynamic', description: 'Websites don\'t have to be static, I love making pages come to life.' }
  ];



  iconss: string[] = [
    'assets/img/html.png',
    'assets/img/css.png',
    'assets/img/js.png',
    'assets/img/angular.png',
    'assets/img/dotnet.png',
    'assets/img/sql.png'
  ];
  projects = [
    {
      name: 'FinancialApp',
      image: 'assets/img/financial1.png',
      technologies: ['HTML', 'CSS', 'DOTNET', 'SQL']
    },
    {
      name: 'Ballkani Fc',
      image: 'assets/img/ballkani.png',
      technologies: ['HTML', 'CSS', 'Angular']
    },
    {
      name: 'RG Movies',
      image: 'assets/img/movierg.png',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP']
    },
    {
      name: 'Car Painting',
      image: 'assets/img/carpainting.png',
      technologies: ['HTML', 'CSS']
    },
    {
      name: 'UnikMusic',
      image: 'assets/img/unikkatil.png',
      technologies: ['HTML', 'CSS', 'JavaScript']
    },
    {
      name: 'Meal',
      image: 'assets/img/mealproject.png',
      technologies: ['HTML', 'CSS', 'Vue']
    }
  ];

  addresses = [
    { label: 'Address', value: 'Prishtina' },
    { label: 'Number', value: '+38343726774' },
    { label: 'Email', value: 'erlind880@gmail.com, erlindzenelaj@hotmail.com' }
  ];


}
register();
