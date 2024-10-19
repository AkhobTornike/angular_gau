export interface User {
    id: number;
    username: string;
    email: string;
    password: string;
    registrationTime: Date;
    lastLoginTime: Date;
    status:  'Confirmed' | 'Blocked';
}
