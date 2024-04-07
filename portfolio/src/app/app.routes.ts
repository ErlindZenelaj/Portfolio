import { Routes } from '@angular/router';
import {MaincomponentComponent} from "./maincomponent/maincomponent.component";
import {FirstpageComponent} from "./firstpage/firstpage.component";

export const routes: Routes = [

  { path: '', title: '', component: FirstpageComponent},
  { path: 'main', title: '', component: MaincomponentComponent},
];
