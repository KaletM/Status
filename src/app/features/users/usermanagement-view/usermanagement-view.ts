import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import User from '@app/core/entities/User';
import { UsersService } from '@app/core/services/usersService';
import { response } from 'express';
import { ChangeDetectorRef } from '@angular/core';
import { AuthService } from '@app/core/services/authService';


@Component({
  standalone: true,
  selector: 'app-usermanagement-view',
  imports: [CommonModule, FormsModule,MatIconModule,RouterLink],
  templateUrl: './usermanagement-view.html',
  styleUrl: './usermanagement-view.css',
})

export class UsermanagementView implements OnInit {
  data: User[] = [];



  formData : User = {
    id: '',
    name: '',
    email: '',
    password: '',
    role:  {
      id: '',
      name: '',
      description : ''
    },
    createdAt: new Date(),
    updatedAt: new Date(),
    username: '',
    restaurantId: ''
  }

  constructor(private usersService: UsersService, private cdr: ChangeDetectorRef,private authService: AuthService) {}

  ngOnInit(): void {

    const currentUser = this.usersService.getCurrentUser();
    const currentSessionToken = this.authService.getCurrentSessionToken();

    currentSessionToken.subscribe((token) => {
      if (!token) {
        console.error('No valid session token found.');
        return;
      }
      currentUser.subscribe((user) => {
        console.log('Current User:', user?.restaurantId);

        if (!user || !user.restaurantId) {
          console.error('No current user found.');
          return;
        }

        console.log('Fetching users for restaurant ID:', user.restaurantId);


        const users = this.usersService.getUserByCompanyId(user?.restaurantId,token);
        users.subscribe((users) => {
          console.log('Fetched Users:', users);

          this.data = users || [];
          this.cdr.detectChanges();
        });
      });
    })



  }


}
