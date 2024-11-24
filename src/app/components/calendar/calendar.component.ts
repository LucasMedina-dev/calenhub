import { Component, OnInit } from '@angular/core';
import { CalendarService } from '../../services/calendar.service';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-calendar',
  standalone:true,
  imports:[NgFor,NgClass,NgIf],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  currentYear!: number;
  currentMonth!: number;
  today!:Array<any>;
  weeks!: Array<any> ;
  daysInMonth: number | null = 0;


  months = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  constructor(private calendarService: CalendarService) {}

  ngOnInit() {
    const today = new Date();
    this.currentYear = today.getFullYear();
    this.currentMonth = today.getMonth();
    this.today= [today.getDate(), today.getMonth()]
    this.loadCalendar();
  }

  loadCalendar() {
    this.weeks= this.calendarService.generateCalendar(this.currentYear, this.currentMonth);
    this.daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate(); // Días del mes actual
  }

  prevMonth() {
    this.currentMonth--;
    if (this.currentMonth < 0) {
      this.currentMonth = 11;
      this.currentYear--;
    }
    this.loadCalendar();
  }

  nextMonth() {
    this.currentMonth++;
    if (this.currentMonth > 11) {
      this.currentMonth = 0;
      this.currentYear++;
    }
    this.loadCalendar();
  }
  isCurrentMonth(day: number | null): boolean {
    if (day === null || this.daysInMonth === null) {
      return false; // Si day o daysInMonth son null, no pertenece al mes actual
    }
    return day > 0 && day <= this.daysInMonth; // Verifica si el día está dentro del rango actual
  }
  
}
