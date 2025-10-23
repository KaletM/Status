import { TestBed } from '@angular/core/testing'
import { CompaniesService } from './companiesService'

describe('CompaniesService', () => {
  let service: CompaniesService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(CompaniesService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})