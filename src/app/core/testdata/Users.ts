import User from "../entities/User";

const usersTestdata : User[] = [
    {
        id: '1',
        name: 'John Doe',
        email: "johndoe@gmail.com",
        createdAt: new Date('2023-01-01T10:00:00Z'),
        updatedAt: new Date('2023-01-01T10:00:00Z')
    },
    {
        id: '2',
        name: 'Jane Smith',
        email: 'jane@gmail.com',
        createdAt: new Date('2023-02-15T14:30:00Z'),
        updatedAt: new Date('2023-02-15T14:30:00Z')
    }
]

export default usersTestdata;