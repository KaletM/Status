import { TestBed } from '@angular/core/testing'
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { InventoryService } from './inventoryService'
import { baseUrl } from './ServiceSettings'

describe('InventoryService', () => {
  let service: InventoryService
  let httpMock: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [InventoryService]
    })
    service = TestBed.inject(InventoryService)
    httpMock = TestBed.inject(HttpTestingController)
  })

  afterEach(() => httpMock.verify())

  it('should retrieve products', () => {
    const mockProducts = [{ id: '1', nombre: 'tomatoes', unidadMedida: 'kg', stockActual: 25, stockMinimo: 5 }]
    service.getProducts().subscribe(data => expect(data.length).toBe(1))
    const req = httpMock.expectOne(`${baseUrl}/products/data`)
    expect(req.request.method).toBe('GET')
    req.flush(mockProducts)
  })
})
