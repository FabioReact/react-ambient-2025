export type User = {
    email: string;
    id: number;
}

export type AuthResponse = {
    accessToken: string;
    user: User;
}