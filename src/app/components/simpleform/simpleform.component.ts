import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-simpleform',
  standalone: true,
  imports: [NgIf],
  templateUrl: './simpleform.component.html',
  styleUrl: './simpleform.component.scss'
})
export class SimpleformComponent {
  opened:boolean=true;

  switchView(){
    this.opened=!this.opened;
  }
}
