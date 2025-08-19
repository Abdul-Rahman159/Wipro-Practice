import { bootstrapApplication } from '@angular/platform-browser';
import { HomeComponent } from './app/home/home.component';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent)
  .catch(err => console.error(err));