import Supplier from "../entities/Supplier"

const suppliersTestdata: Supplier[] = [
  {
    id: 's1',
    empresaId: 'e1',
    nombre: 'fresh farm ltd.',
    contacto: 'maria gonzález',
    telefono: '+506 2222-1111',
    email: 'ventas@freshfarm.cr',
    createdAt: new Date('2025-01-01T10:00:00Z'),
    updatedAt: new Date('2025-01-01T10:00:00Z')
  },
  {
    id: 's2',
    empresaId: 'e1',
    nombre: 'italia gourmet sa',
    contacto: 'luca rossi',
    telefono: '+506 2222-2222',
    email: 'orders@italiagourmet.cr',
    createdAt: new Date('2025-01-02T10:00:00Z'),
    updatedAt: new Date('2025-01-02T10:00:00Z')
  }
]

export default suppliersTestdata
