export interface User{
    tag:string,
    displayName:string,
    email:string,
    avatarUrl:string,
    bio:string
}

export interface CreateProfileReq{
    displayName:string,
    email:string,
    avatar:string,
    bio:string,
    avatarFile:File|null
}