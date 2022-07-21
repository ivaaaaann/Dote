export interface User {
    id: string,
    grade: string,
    room: string,
    number: string,
    role: string,
}

export interface AuthResponse {
    member: User,
    token: string,
    refresh_token: string
}