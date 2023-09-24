export type BuildMode = 'production' | 'development'

export interface BuildOptions{
    mode:BuildMode,
    paths:BuildPaths,
    isDev:boolean,
    port:number
}

export interface BuildPaths{
    src:string,
    entry:string,
    output:string,
    html:string
}

export interface BuildEnv{
    mode:BuildMode,
    port:number
}