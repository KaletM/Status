import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-menu',
  imports: [MatIconModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
  standalone: true,
})
export class MenumanagementView implements OnInit {
  ngOnInit(): void {
    
    console.log("asd");
    

  }
}
