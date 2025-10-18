import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from './navbar/navbar';

@NgModule({
  imports: [CommonModule,Navbar],
  exports: [Navbar] // Exportar el NavbarComponent
})
export class SharedModule {}