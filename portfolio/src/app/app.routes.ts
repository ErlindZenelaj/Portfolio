import { Routes } from '@angular/router';
import {EducationComponent} from "./education/education.component";
import {MaincomponentComponent} from "./maincomponent/maincomponent.component";

export const routes: Routes = [

  { path: '', title: '', component: MaincomponentComponent},
  { path: '', title: '', component: MaincomponentComponent},
  { path: 'education', title: '', component: EducationComponent},

];
