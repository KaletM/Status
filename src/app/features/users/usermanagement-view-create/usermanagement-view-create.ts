import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-usermanagement-view-create',
  imports: [RouterLink],
  templateUrl: './usermanagement-view-create.html',
  styleUrl: './usermanagement-view-create.css',
  standalone: true,
})
export class UsermanagementViewCreate {
  // Campos del formulario
  firstName: string = '';
  lastName: string = '';
  avatarPreview: string = 'JD';
  selectedRole: string = '';

  // Método para actualizar el avatar
  updateAvatarPreview() {
    let initials = '';
    if (this.firstName) initials += this.firstName[0].toUpperCase();
    if (this.lastName) initials += this.lastName[0].toUpperCase();
    this.avatarPreview = initials || 'JD';
  }

  // Seleccionar rol
  selectRole(role: string) {
    this.selectedRole = role;
  }

  // Envío del formulario
  onSubmit() {
    alert('User added successfully!');
    console.log({
      firstName: this.firstName,
      lastName: this.lastName,
      role: this.selectedRole,
    });
  }

  // Volver atrás
  goBack() {
    window.history.back();
  }
}
