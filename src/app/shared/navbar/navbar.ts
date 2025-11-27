import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '@app/core/services/authService';
import { UsersService } from '@app/core/services/usersService';
import User from '@app/core/entities/User';


@Component({
  selector: 'app-navbar',
  imports: [RouterLink, MatIconModule, RouterLinkActive],
  standalone: true,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements OnInit {

  constructor(private authService: AuthService,private userService: UsersService) {

  }

  user: User = {
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

    console.log('Navbar initialized');


    const currentUser = this.userService.getCurrentUser();

    if (currentUser) {
      currentUser.subscribe({
        next: (userData) => {
          if (userData) {
            this.user = userData;
            console.log('User data loaded in navbar:', this.user);
          }
        },
        error: (err) => {
          console.error('Failed to fetch user data:', err);
        }
      });
    }



  }


}
