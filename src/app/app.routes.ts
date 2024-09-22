import { Routes } from '@angular/router';
import { ResumeComponent } from './views/resume/resume.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: ResumeComponent },
];
