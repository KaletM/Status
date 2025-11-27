import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { CompaniesService } from '../../../core/services/companiesService'
import Company from '../../../core/entities/Company'
import { AuthService } from '@app/core/services/authService'
import { RouterLink } from '@angular/router'
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-company-view',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './company-view.html',
  styleUrls: ['./company-view.css']
})

export class CompanyViewComponent implements OnInit {
  data: Company[] = []
  filtered: Company[] = []
  query = ''

  constructor(private companiesService: CompaniesService,private authService: AuthService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    console.log("Company View Loaded");

    const currentSessionToken = this.authService.getCurrentSessionToken();

    currentSessionToken.subscribe({
      next: (token) => {

        if (!token) {
          console.error('No valid session token found.');
          return;
        }

        this.companiesService.getData(token).subscribe({
          next: (companies) => {
            console.log(companies);
            this.data = companies || [];
            console.log(this.data);

            this.cdr.detectChanges();
          },
          error: e => console.error(e)
        })

      },
      error: (err) => {
        console.error('Failed to fetch session token:', err);
      }
    })

  }



  onEdit(id: number): void {}
  onDelete(id: number): void {}
}
