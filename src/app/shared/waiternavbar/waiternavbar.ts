import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from "@angular/router";
import User from '@app/core/entities/User';
import { UsersService } from '@app/core/services/usersService';

@Component({
  selector: 'app-waiternavbar',
  imports: [MatIconModule, RouterLink],
  templateUrl: './waiternavbar.html',
  styleUrl: './waiternavbar.css'
})
export class Waiternavbar {

  constructor(
    private userService: UsersService
  ) {

  }

  user : User = {
    id: '',
    email: '',
    password: '',
    role: {
      id: '',
      name: '',
      description: ''
    },
    createdAt: new Date(),
    updatedAt: new Date(),
    username: '',
    name: ''
  }

  ngOnInit(): void {

    const userResponse = this.userService.getCurrentUser();

    userResponse.subscribe({
      next: (userData) => {
        if (userData) {
          this.user = userData;
        }
      },
      error: (err) => {
        console.error('Failed to fetch user data:', err);
      }
    });
  }
}
