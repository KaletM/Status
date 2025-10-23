import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { CompaniesService } from '../../../core/services/companiesService'
import Company from '../../../core/entities/Company'

@Component({
  selector: 'app-company-view',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './company-view.html',
  styleUrls: ['./company-view.css']
})
export class CompanyViewComponent implements OnInit {
  data: Company[] = []
  filtered: Company[] = []
  query = ''

  constructor(private companiesService: CompaniesService) {}

  ngOnInit(): void {
    this.companiesService.getData().subscribe({
      next: r => { this.data = r; this.filtered = r },
      error: e => console.error(e)
    })
  }

  filter(): void {
    const q = this.query.trim().toLowerCase()
    this.filtered = this.data.filter(c =>
      (c.name + ' ' + c.address + ' ' + c.contactPerson + ' ' + c.contactPhone)
        .toLowerCase().includes(q)
    )
  }

  onAdd(): void {}
  onEdit(id: string): void {}
  onDelete(id: string): void {}
}