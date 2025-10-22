export type MovementType = 'in' | 'out' | 'adjustment'

export default interface InventoryMovement {
  id: string
  empresaId: string
  productoId: string
  tipo: MovementType
  cantidad: number
  unidadMedida: string
  motivo?: string
  referencia?: string
  fecha: Date
  createdAt: Date
  updatedAt: Date
}
