import { Component } from '@angular/core';
import User from '@app/core/entities/User';
import { AuthService } from '@app/core/services/authService';

@Component({
  selector: 'app-login-view',
  imports: [],
  templateUrl: './login-view.html',
  styleUrl: './login-view.css'
})
export class LoginView {

  formData: Omit<User, 'name' | 'id' | 'role' | 'createdAt' | 'updatedAt'> = {
    email: '',
    password: ''
  }

  constructor(private authService: AuthService) {}


  onSubmit(email: string,password: string): void {
    this.authService.login(email,password).subscribe({
      next: (response) => console.log('Login successful:', response),
      error: (err) => console.error(err),
    });
  }

}
