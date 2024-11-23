import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {

  generateCalendar(year: number, month: number): Array<Array<string>> {
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPreviousMonth = new Date(year, month, 0).getDate();
    const weeks: Array<Array<string>> = [];
  
    let currentDay = 1 - firstDayOfMonth;
  
    while (weeks.length < 6) {
      const week: Array<any>=[];
  
      for (let i = 0; i < 7; i++) { 
        if (currentDay < 1) {
          week.push([daysInPreviousMonth + currentDay, month])
        } else if (currentDay > daysInMonth) {
          week.push([currentDay - daysInMonth, month+2])
        } else {
          week.push([currentDay, month+1])
        }
        currentDay++;
      }
  
      weeks.push(week);
    }
    return weeks;
  }
  
}
