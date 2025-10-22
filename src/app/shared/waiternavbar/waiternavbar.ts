import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-waiternavbar',
  imports: [MatIconModule, RouterLink],
  templateUrl: './waiternavbar.html',
  styleUrl: './waiternavbar.css'
})
export class Waiternavbar {

}
