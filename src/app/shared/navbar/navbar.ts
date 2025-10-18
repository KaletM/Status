import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-navbar',
  imports: [RouterLink,MatIconModule],
  standalone: true,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

}
