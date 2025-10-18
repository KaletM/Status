import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import User from '@app/core/entities/User';
import { UsersService } from '@app/core/services/usersService';
import { response } from 'express';

@Component({
  standalone: true,
  selector: 'app-usermanagement-view',
  imports: [CommonModule, FormsModule],
  templateUrl: './usermanagement-view.html',
  styleUrl: './usermanagement-view.css',
})

export class UsermanagementView implements OnInit {
  data: User[] = [];

  formData : User = {
    id: '',
    name: '',
    email: '',
    createdAt: new Date(),
    updatedAt: new Date()
  }

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.getData().subscribe({
      next: (response) => (this.data = response),
      error: (error) => console.error('There was an error!', error),
    });
  }

  onSubmit(data: any): void {
    this.usersService.postData(data).subscribe({
      next: (response) => console.log('Data saved:', response),
      error: (err) => console.error(err),
    });
  }
}
