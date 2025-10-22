type roles = 'admin' | 'waiter' | 'chef' | 'cashier';

interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    role: roles;
    createdAt: Date;
    updatedAt: Date;
}

export default User;