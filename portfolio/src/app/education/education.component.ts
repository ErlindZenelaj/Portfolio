import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {HeaderComponent} from "../header/header.component";

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HeaderComponent],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {

  education: any[] = [
    {
      title: 'Bachelor Degree - UBT',
      date: '2020 - 2023',
      description: 'UBT University is renowned for its commitment to academic excellence, offering high-quality education across various disciplines.'
    },
    {
      title: 'Middle School - Skender Luarasi',
      date: '2016 - 2020',
      description: 'Middle School Skender Luarasi is known for its dedication to academic excellence, providing students with a high-quality education that prepares them for future success.'
    },
    {
      title: 'Lower School - Deshmoret e Greikocit',
      date: '2008 - 2016',
      description: 'Lower School Shtegu i Liris provides a nurturing and supportive environment where young learners feel safe, valued, and encouraged to explore and grow.'
    },
  ];

  experiences: any[] = [
    {
      title: 'SunnyHill - Tech',
      date: '2023 - 2024',
      description: 'It\'s a dynamic and welcoming environment where you can dive into exciting projects and learn from experienced professionals.'
    },
    {
      title: 'Per Programera',
      date: '2021 - 2022',
      description: 'Participants can expect to engage in practical projects and challenges, receiving guidance and support from experienced instructors along the way.'
    },
  ];
}
