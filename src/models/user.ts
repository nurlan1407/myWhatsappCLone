import { Table, Model, Column, DataType } from "sequelize-typescript";


@Table({
    timestamps:false,
    tableName: User.USER_TABLE_NAME,
})
export class User extends Model {
    public static USER_TABLE_NAME = "users"  as string
    public static ID_FIELD = "user_id" as string
    public static DISPLAY_NAME = "display_name" as string
    public static EMAIL = "email" as string
    public static ACCESS_TOKEN_FIELD = "access_token" as string
    public static REFRESH_TOKEN = "refresh_token" as string
    public static AVATAR_URL = "avatar_url" as string


    @Column({
        primaryKey: true,
        autoIncrement: true,
        field:User.ID_FIELD
    })id!:number
    
    @Column({
        type:DataType.STRING,
        allowNull:true,
        field:User.DISPLAY_NAME
    })
    displayName!:string


    @Column({
        type:DataType.STRING,
        allowNull:false,
        field: User.EMAIL
    })
    email!:string

    
    @Column({
        type:DataType.STRING,
        allowNull:true,
        field: User.AVATAR_URL
    })
    avatarUrl!:string
}
