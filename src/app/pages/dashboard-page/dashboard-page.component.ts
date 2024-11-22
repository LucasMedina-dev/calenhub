import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header/header.component";
import { CalendarComponent } from "../../components/calendar/calendar.component";

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [HeaderComponent, CalendarComponent],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss'
})
export class DashboardPageComponent {

}
