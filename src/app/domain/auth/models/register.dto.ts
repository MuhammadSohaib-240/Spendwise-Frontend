export type RegisterRequestDto = {
    name: string,
    username: string,
    email: string,
    password: string
}

export type RegisterResponseDto = {
    message: string
}