import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of, catchError, throwError } from 'rxjs'
import { ErrorHandlerService } from '../error-handler'
import { baseUrl, isTesting } from './ServiceSettings'
import Company from '../entities/Company'
import companiesTestdata from '../testdata/Companies'

type GetFn = () => Observable<Company[]>
type PostFn = (data: Company) => Observable<Company>
type PutFn = (id: string, data: Company) => Observable<Company>
type DeleteFn = (id: string) => Observable<void>

@Injectable({ providedIn: 'root' })
export class CompaniesService {
  private apiUrl = isTesting ? `${baseUrl}test/companies` : `${baseUrl}companies`
  private getImpl!: GetFn
  private postImpl!: PostFn
  private putImpl!: PutFn
  private deleteImpl!: DeleteFn

  constructor(private http: HttpClient, private errorHandler: ErrorHandlerService) {
    this.getImpl = isTesting
      ? () => of(companiesTestdata)
      : () =>
          this.http.get<Company[]>(`${this.apiUrl}/data`).pipe(
            catchError(e => {
              this.errorHandler.handleError(e)
              return throwError(() => e)
            })
          )

    this.postImpl = isTesting
      ? (data: Company) => {
          companiesTestdata.push(data)
          return of(data)
        }
      : (data: Company) => this.http.post<Company>(`${this.apiUrl}/data`, data)

    this.putImpl = isTesting
      ? (id: string, data: Company) => {
          const i = companiesTestdata.findIndex(x => x.id === id)
          i >= 0 && (companiesTestdata[i] = data)
          return of(data)
        }
      : (id: string, data: Company) => this.http.put<Company>(`${this.apiUrl}/data/${id}`, data)

    this.deleteImpl = isTesting
      ? (id: string) => {
          const i = companiesTestdata.findIndex(x => x.id === id)
          i >= 0 && companiesTestdata.splice(i, 1)
          return of(void 0)
        }
      : (id: string) => this.http.delete<void>(`${this.apiUrl}/data/${id}`)
  }

  getData(): Observable<Company[]> { return this.getImpl() }
  postData(data: Company): Observable<Company> { return this.postImpl(data) }
  updateData(id: string, data: Company): Observable<Company> { return this.putImpl(id, data) }
  deleteData(id: string): Observable<void> { return this.deleteImpl(id) }
}
