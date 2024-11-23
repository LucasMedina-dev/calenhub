import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, interval, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  private currentTimeSubject = new BehaviorSubject<Date>(this.getCurrentTime());
  private stringTimeSubject = new BehaviorSubject<string>(this.formatDate());
  public currentTime$ = this.currentTimeSubject.asObservable();
  public currentStringTime$ = this.stringTimeSubject.asObservable();
  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    if (isPlatformBrowser(this.platformId)) {
      interval(1000)
        .pipe(map(() => this.getCurrentTime()))
        .subscribe((time) => this.currentTimeSubject.next(time));
    }
  }
  private formatDate() {
    const months = [
      'enero',
      'febrero',
      'marzo',
      'abril',
      'mayo',
      'junio',
      'julio',
      'agosto',
      'septiembre',
      'octubre',
      'noviembre',
      'diciembre',
    ];
    const day = this.getCurrentTime().getDate();
    const monthName = months[this.getCurrentTime().getMonth()];
    const year = this.getCurrentTime().getFullYear();

    const stringTimeSubject = `${day} de ${monthName} de ${year}`;
    return stringTimeSubject;
  }
  private getCurrentTime(): Date {
    return new Date();
  }
}
