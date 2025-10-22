export type PurchaseOrderStatus = 'pendiente' | 'enviado' | 'recibido' | 'cancelado'

export default interface PurchaseOrder {
  id: string
  empresaId: string
  proveedorId: string
  estado: PurchaseOrderStatus
  fechaOrden: Date
  fechaRecepcion?: Date
  total?: number
  items?: import('./PurchaseOrderItem').default[]
  createdAt: Date
  updatedAt: Date
}
