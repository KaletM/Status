import InventoryMovement from "../entities/InventoryMovement"

const inventoryMovementsTestdata: InventoryMovement[] = [
  {
    id: 'm1',
    empresaId: 'e1',
    productoId: 'p1',
    tipo: 'in',
    cantidad: 30,
    unidadMedida: 'kg',
    motivo: 'initial load',
    referencia: 'po-1001',
    fecha: new Date('2025-01-01T09:00:00Z'),
    createdAt: new Date('2025-01-01T09:00:00Z'),
    updatedAt: new Date('2025-01-01T09:00:00Z')
  },
  {
    id: 'm2',
    empresaId: 'e1',
    productoId: 'p3',
    tipo: 'out',
    cantidad: 2,
    unidadMedida: 'liters',
    motivo: 'kitchen usage',
    referencia: 'sale-2001',
    fecha: new Date('2025-01-06T13:00:00Z'),
    createdAt: new Date('2025-01-06T13:00:00Z'),
    updatedAt: new Date('2025-01-06T13:00:00Z')
  },
  {
    id: 'm3',
    empresaId: 'e1',
    productoId: 'p5',
    tipo: 'adjustment',
    cantidad: -1,
    unidadMedida: 'kg',
    motivo: 'spoilage',
    referencia: 'adj-01',
    fecha: new Date('2025-01-08T18:00:00Z'),
    createdAt: new Date('2025-01-08T18:00:00Z'),
    updatedAt: new Date('2025-01-08T18:00:00Z')
  }
]

export default inventoryMovementsTestdata
