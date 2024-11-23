import { Component, OnInit } from '@angular/core';
import { CalendarComponent } from "../../components/calendar/calendar.component";
import { TimeService } from '../../services/time.service';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CalendarComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit {
  currentTime!:Date;
  currentStringTime!:string;
  constructor(private time : TimeService){
  }
  ngOnInit(): void {
    this.time.currentStringTime$.subscribe((time)=>{
      this.currentStringTime=time;
    })
    this.time.currentTime$.subscribe((time)=>{
      this.currentTime=time;
    })
  }
}
