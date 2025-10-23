import Company from "../entities/Company"

const companiesTestdata: Company[] = [
  {
    id: '1',
    name: 'burger king',
    address: '123 main st, anytown usa',
    contactPerson: 'john doe',
    contactPhone: '555-1234',
    status: 'active',
    createdAt: new Date('2024-01-01T10:00:00Z'),
    updatedAt: new Date('2024-01-01T10:00:00Z')
  },
  {
    id: '2',
    name: 'pizza hut',
    address: '456 oak ave, anytown usa',
    contactPerson: 'jane smith',
    contactPhone: '555-5678',
    status: 'active',
    createdAt: new Date('2024-02-15T14:30:00Z'),
    updatedAt: new Date('2024-02-15T14:30:00Z')
  },
  {
    id: '3',
    name: 'taco bell',
    address: '789 pine st, anytown usa',
    contactPerson: 'peter jones',
    contactPhone: '555-9012',
    status: 'inactive',
    createdAt: new Date('2024-03-10T09:00:00Z'),
    updatedAt: new Date('2024-03-10T09:00:00Z')
  },
  {
    id: '4',
    name: 'kfc',
    address: '101 elm st, anytown usa',
    contactPerson: 'mary johnson',
    contactPhone: '555-3456',
    status: 'active',
    createdAt: new Date('2024-04-20T16:45:00Z'),
    updatedAt: new Date('2024-04-20T16:45:00Z')
  }
]

export default companiesTestdata
