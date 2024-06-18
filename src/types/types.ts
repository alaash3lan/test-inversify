export const TYPES = {
    UserService : Symbol.for('UserService'),
    AuthService : Symbol.for('AuthService'),
}

export interface IUserService {
    getUSer(id: number): string
} 