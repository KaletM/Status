import { Component } from '@angular/core';
import User from '@app/core/entities/User';
import { AuthService } from '@app/core/services/authService';
import { BidiModule } from "@angular/cdk/bidi";
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '@app/core/services/usersService';

@Component({
  selector: 'app-login-view',
  imports: [BidiModule,FormsModule],
  templateUrl: './login-view.html',
  styleUrl: './login-view.css'
})
export class LoginView {

  formData: Omit<User, 'name' | 'id' | 'role' | 'createdAt' | 'updatedAt' | 'email'> = {
    username: '',
    password: ''
  }

  constructor(private authService: AuthService,
    private userService: UsersService,
    private router: Router) {}


  onSubmit(username: string,password: string): void {
    const response = this.authService.login(username,password);
    response.subscribe({
      next: (isLogin) => {
       if (isLogin) {
        const user = this.userService.getUserByUsername(username);
        console.log(user);
        user.subscribe({
          next: (userData) => {
            console.log(userData);

            this.authService.setCurrentUser(userData);
            if (userData?.role.name.toLowerCase() === 'waiter') {
              this.router.navigate(['/waiter']);
            } else if (userData?.role.name.toLocaleLowerCase() === 'restaurantmanagement') {
              this.router.navigate(['/admin/dashboard']);
            } else if (userData?.role.name.toLocaleLowerCase() === 'superadministrator') {
              this.router.navigate(['/companies']);
            } else {
              console.error('Unknown role:', userData?.role.name);
            }
          },
          error: (err) => {
            console.error('Failed to fetch user data:', err);
          }
        });

       }
      },
      error: (err) => {
        console.error('Login failed:', err);
      }
    });
  }

}
