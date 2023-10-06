export interface User{
    displayName:string,
    email:string,
    avatar:string,
    bio:string
}

export interface CreateProfileReq{
    displayName:string,
    email:string,
    avatar:string,
    bio:string,
    avatarFile:File|null
}