import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of, catchError, throwError } from 'rxjs'
import { ErrorHandlerService } from '../error-handler'
import { baseUrl, isTesting } from './ServiceSettings'
import Company from '../entities/Company'
import companiesTestdata from '../testdata/Companies'
import { AuthService } from './authService'

type GetFn = () => Observable<Company[]>
type PostFn = (data: Company) => Observable<Company>
type PutFn = (id: string, data: Company) => Observable<Company>
type DeleteFn = (id: string) => Observable<void>

@Injectable({ providedIn: 'root' })
export class CompaniesService {
  private apiUrl = isTesting ? `${baseUrl}test/companies` : `${baseUrl}/Restaurant`
  private getImpl!: GetFn
  private postImpl!: PostFn
  private putImpl!: PutFn
  private deleteImpl!: DeleteFn

  constructor(private http: HttpClient, private errorHandler: ErrorHandlerService,private authService: AuthService) {

  }


  getData(token: string): Observable<Company[]> {
    if (isTesting) {
      console.log('Fetching companies in test mode')
      return of(companiesTestdata)
    }

    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + token
    }

    return this.http.get<Company[]>(this.apiUrl,{headers: headers}).pipe(
      catchError((error) => {
        this.errorHandler.handleError(error)
        return throwError(() => error)
      })
    )
  }

  createCompany(data: Company,token: string): Observable<Company> {
    if (isTesting) {
      console.log('Creating company in test mode:', data)
      companiesTestdata.push(data)
      return of(data)
    }

    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + token
    }

    const payload = {
      "id": 0,
      "name": data.name,
      "legalName": data.legalName,
      "brandSlogan": "",
      "description": "",
      "email": data.email,
      "phoneNumber": data.phoneNumber,
      "website": "string",
      "logoUrl": "string",
      "bannerUrl": "string",
      "taxId": "string",
      "headquartersAddress": "string",
      "country": data.country,
      "region": data.region,
      "isFranchiseModel": true,
      "allowOnlineOrders": true,
      "allowReservations": true,
      "allowDelivery": true,
      "facebookUrl": "string",
      "instagramUrl": "string",
      "twitterUrl": "string",
      "tikTokUrl": "string",
      "foundedDate": "2025-11-27T09:48:18.369Z",
      "founder": "string"
    }

    return this.http.post<Company>(this.apiUrl, payload, {headers: headers}).pipe(
      catchError((error) => {
        this.errorHandler.handleError(error)
        return throwError(() => error)
      })
    )
  }

}
