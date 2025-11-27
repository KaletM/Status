import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import User from '@app/core/entities/User';
import { AuthService } from '@app/core/services/authService';
import { UsersService } from '@app/core/services/usersService';

@Component({
  selector: 'app-usermanagement-view-create',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './usermanagement-view-create.html',
  styleUrl: './usermanagement-view-create.css',
  standalone: true,
})
export class UsermanagementViewCreate {
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UsersService, private authService: AuthService) {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      passwordHash: ['', Validators.required],
      restaurantId: [null, Validators.required],
      restaurantBranchId: [null],
      roleId: [null, Validators.required]
    });
  }

  onSubmit(): void {
    console.log('Form submitted:', this.userForm.value);

    if (this.userForm.valid) {
      const currentSessionToken = this.authService.getCurrentSessionToken();

      currentSessionToken.subscribe({
        next: (token) => {
          if (!token) {
            console.error('No valid session token found.');
            return;
          }

          const newUser: User = {
            id: '',
            username: this.userForm.value.username,
            email: this.userForm.value.email,
            password: this.userForm.value.passwordHash,
            restaurantId: this.userForm.value.restaurantId,
            role: {
              id: this.userForm.value.roleId,
              name: '',
              description: ''
            },
            createdAt: new Date(),
            updatedAt: new Date(),
            name: ''
          };


          this.userService.createUser(newUser, token).subscribe({
            next: (createdUser) => {
              console.log('User created successfully:', createdUser);
            },
            error: e => console.error('Error creating user:', e)
          });
        },
        error: (err) => {
          console.error('Failed to fetch session token:', err);
        }
      });
    }
  }

}
