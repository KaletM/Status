import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'
import { CompaniesService } from '../../../core/services/companiesService'
import Company from '../../../core/entities/Company'
import { AuthService } from '@app/core/services/authService'
import { UsersService } from '@app/core/services/usersService'
import { Router } from '@angular/router';


@Component({
  selector: 'app-company-view',
  standalone: true,
  imports: [CommonModule, FormsModule,ReactiveFormsModule],
  templateUrl: './company-view.html',
  styleUrls: ['./company-view.css']
})
export class CompanyCreateComponent implements OnInit {

  companyForm!: FormGroup

  constructor(private companiesService: CompaniesService,private authService: AuthService, private usersService: UsersService, private router: Router) {}
  formData : Company = {
    id: 0,
    name: '',
    legalName: '',
    description: '',
    email: '',
    phoneNumber: '',
    website: '',
    country: '',
    region: '',
    headquartersAddress: '',
    taxId: '',
    founder: '',
    foundedDate: '',
    brandSlogan: '',
    bannerUrl: '',
    logoUrl: '',
    facebookUrl: '',
    instagramUrl: '',
    twitterUrl: '',
    tikTokUrl: '',
    allowDelivery: false,
    allowReservations: false,
    allowOnlineOrders: false,
    isFranchiseModel: false
  }


  ngOnInit(): void {

    this.companyForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      legalName: new FormControl('', [Validators.maxLength(150)]),
      country: new FormControl('', [Validators.required]),
      region: new FormControl('', [Validators.maxLength(100)]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(100)]),
      phoneNumber: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      taxId: new FormControl('', [Validators.maxLength(50)]),
      headquartersAddress: new FormControl('', [Validators.maxLength(255)])
    });

  }


  onSubmit(): void {
    console.log('Form submitted:', this.companyForm.value);

    if (this.companyForm.valid){
      const currentSessionToken = this.authService.getCurrentSessionToken();

      currentSessionToken.subscribe({
        next: (token) => {

          if (!token) {
            console.error('No valid session token found.');
            return;
          }

          const newCompany: Company = {
            ...this.formData,
            ...this.companyForm.value
          };

          this.companiesService.createCompany(newCompany, token).subscribe({
            next: (createdCompany) => {
              console.log('Company created successfully:', createdCompany);
              this.router.navigate(['/companies']);
            },
            error: e => console.error('Error creating company:', e)
          });

        },
        error: (err) => {
          console.error('Failed to fetch session token:', err);
        }
      });
    }
  }


}
