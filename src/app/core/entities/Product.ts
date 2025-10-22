export default interface Product {
  id: string
  empresaId: string
  nombre: string
  categoriaId?: string
  unidadMedida: string
  stockActual: number
  stockMinimo: number
  precioCostoPromedio?: number
  createdAt: Date
  updatedAt: Date
}
