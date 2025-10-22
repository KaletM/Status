import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Waiternavbar } from '@app/shared/waiternavbar/waiternavbar';

@Component({
  selector: 'app-waiterlayout',
  imports: [Waiternavbar,RouterOutlet],
  templateUrl: './waiterlayout.html',
  styleUrl: './waiterlayout.css',
  standalone: true
})
export class Waiterlayout {

}
