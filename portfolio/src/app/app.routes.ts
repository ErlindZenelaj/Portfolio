import { Routes } from '@angular/router';
import {EducationComponent} from "./education/education.component";
import {HomeComponent} from "./home/home.component";
import {AllcomponentComponent} from "./allcomponent/allcomponent.component";

export const routes: Routes = [

  { path: '', title: '', component: AllcomponentComponent},
  { path: '', title: '', component: AllcomponentComponent},
  { path: 'education', title: '', component: EducationComponent}

];
