import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { CalendarPageComponent } from './pages/calendar-page/calendar-page.component';

export const routes: Routes = [
    {path:'', component:LandingPageComponent},
    {path:'dashboard', component:DashboardPageComponent},
    {path:'calendar', component:CalendarPageComponent}
];
