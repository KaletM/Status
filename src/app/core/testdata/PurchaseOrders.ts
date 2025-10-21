import PurchaseOrder, { PurchaseOrderStatus } from "../entities/PurchaseOrder"
import PurchaseOrderItem from "../entities/PurchaseOrderItem"

const items1: PurchaseOrderItem[] = [
  { id: 'i1', pedidoProveedorId: 'po1', productoId: 'p3', cantidad: 5, precioUnitario: 6.5, subtotal: 32.5 },
  { id: 'i2', pedidoProveedorId: 'po1', productoId: 'p5', cantidad: 4, precioUnitario: 2.0, subtotal: 8.0 }
]

const items2: PurchaseOrderItem[] = [
  { id: 'i3', pedidoProveedorId: 'po2', productoId: 'p2', cantidad: 20, precioUnitario: 0.9, subtotal: 18.0 }
]

const purchaseOrdersTestdata: PurchaseOrder[] = [
  {
    id: 'po1',
    empresaId: 'e1',
    proveedorId: 's2',
    estado: 'pendiente',
    fechaOrden: new Date('2025-01-09T12:00:00Z'),
    total: 40.5,
    items: items1,
    createdAt: new Date('2025-01-09T12:00:00Z'),
    updatedAt: new Date('2025-01-09T12:00:00Z')
  },
  {
    id: 'po2',
    empresaId: 'e1',
    proveedorId: 's1',
    estado: 'recibido',
    fechaOrden: new Date('2025-01-03T10:00:00Z'),
    fechaRecepcion: new Date('2025-01-05T16:00:00Z'),
    total: 18.0,
    items: items2,
    createdAt: new Date('2025-01-03T10:00:00Z'),
    updatedAt: new Date('2025-01-05T16:00:00Z')
  }
]

export default purchaseOrdersTestdata
