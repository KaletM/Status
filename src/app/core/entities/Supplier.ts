export default interface Supplier {
  id: string
  empresaId: string
  nombre: string
  contacto?: string
  telefono?: string
  email?: string
  createdAt: Date
  updatedAt: Date
}
