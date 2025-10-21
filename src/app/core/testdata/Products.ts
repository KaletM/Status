import Product from "../entities/Product"

const productsTestdata: Product[] = [
  {
    id: 'p1',
    empresaId: 'e1',
    nombre: 'tomatoes',
    categoriaId: 'c-veg',
    unidadMedida: 'kg',
    stockActual: 25,
    stockMinimo: 5,
    precioCostoPromedio: 1.2,
    createdAt: new Date('2025-01-01T10:00:00Z'),
    updatedAt: new Date('2025-01-01T10:00:00Z')
  },
  {
    id: 'p2',
    empresaId: 'e1',
    nombre: 'flour',
    categoriaId: 'c-bak',
    unidadMedida: 'kg',
    stockActual: 5,
    stockMinimo: 8,
    precioCostoPromedio: 0.9,
    createdAt: new Date('2025-01-05T10:00:00Z'),
    updatedAt: new Date('2025-01-05T10:00:00Z')
  },
  {
    id: 'p3',
    empresaId: 'e1',
    nombre: 'olive oil',
    categoriaId: 'c-oil',
    unidadMedida: 'liters',
    stockActual: 0,
    stockMinimo: 2,
    precioCostoPromedio: 6.5,
    createdAt: new Date('2025-01-06T10:00:00Z'),
    updatedAt: new Date('2025-01-06T10:00:00Z')
  },
  {
    id: 'p4',
    empresaId: 'e1',
    nombre: 'mozzarella cheese',
    categoriaId: 'c-dairy',
    unidadMedida: 'kg',
    stockActual: 12,
    stockMinimo: 4,
    precioCostoPromedio: 4.3,
    createdAt: new Date('2025-01-07T10:00:00Z'),
    updatedAt: new Date('2025-01-07T10:00:00Z')
  },
  {
    id: 'p5',
    empresaId: 'e1',
    nombre: 'basil',
    categoriaId: 'c-herb',
    unidadMedida: 'kg',
    stockActual: 1,
    stockMinimo: 3,
    precioCostoPromedio: 2.1,
    createdAt: new Date('2025-01-08T10:00:00Z'),
    updatedAt: new Date('2025-01-08T10:00:00Z')
  }
]

export default productsTestdata
