import { Component, OnInit } from '@angular/core';
import { TimeService } from '../../../services/time.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  currentTime!: Date;
  formattedDate!:string;
  constructor(private time: TimeService) {}
  ngOnInit(): void {
    this.time.currentTime$.subscribe((time) => {
      this.currentTime = time;
    });
    this.time.currentStringTime$.subscribe((time) => {
      this.formattedDate = time;
    });
  }
}
