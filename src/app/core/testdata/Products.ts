

const productsTestData : Product[] = [
    {
        id: '1',
        name: 'Margherita Pizza',
        description: 'Classic pizza with tomato sauce, mozzarella cheese, and fresh basil.',
        price: 8.99,
        category: 'mains',
        stock: 50,
        createdAt: new Date('2023-01-15T10:00:00Z'),
        updatedAt: new Date('2023-01-15T10:00:00Z')
    },
    {
        id: '2',
        name: 'Caesar Salad',
        description: 'Crisp romaine lettuce with Caesar dressing, croutons, and Parmesan cheese.',
        price: 6.49,
        category: 'starters',
        stock: 30,
        createdAt: new Date('2023-02-20T12:30:00Z'),
        updatedAt: new Date('2023-02-20T12:30:00Z')
    },
    {
        id: '3',
        name: 'Chocolate Lava Cake',
        description: 'Warm chocolate cake with a gooey molten center, served with vanilla ice cream.',
        price: 5.99,
        category: 'desserts',
        stock: 20,
        createdAt: new Date('2023-03-05T15:45:00Z'),
        updatedAt: new Date('2023-03-05T15:45:00Z')
    },
    {
        id: '4',
        name: 'Lemonade',
        description: 'Refreshing homemade lemonade made with fresh lemons and a hint of mint.',
        price: 2.99,
        category: 'drinks',
        stock: 100,
        createdAt: new Date('2023-04-10T09:15:00Z'),
        updatedAt: new Date('2023-04-10T09:15:00Z')
    }
]