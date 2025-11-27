export interface Rol {
  id: string;
  name: string;
  description : string;
}

export interface LoginSuccessResponse {
  token: string;
}

interface User {
    id: string;
    name: string;
    email: string;
    username: string;
    password: string;
    role: Rol;
    createdAt: Date;
    updatedAt: Date;
    restaurantId?: string;
}

export default User;
