import { Component } from '@angular/core';
import { CalendarComponent } from "../../components/calendar/calendar.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CalendarComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
