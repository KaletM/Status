interface Company {
  id: string
  name: string
  address: string
  contactPerson: string
  contactPhone: string
  status: 'active' | 'inactive'
  createdAt: Date
  updatedAt: Date
}
export default Company
