import { User } from '@App/models'

interface IUserRepository {
    save(user: User): Promise<User>
    update(note: User): Promise<void>
    getUserById(id: number): Promise<User | null>
    getUserByEmail(email:string):Promise<User | null>
    getAll(): Promise<User[]>
}

class UserRepository implements IUserRepository {
    async save(user: User): Promise<User> {
        try {
            const a = await User.create({
                email: user.email,
                displayName: user.displayName,
                avatartUrl:user.avatarUrl
            })
            return a
            
        } catch (e) {
            throw new Error("Failed to create user!" + e);
        }
    }
    async update(user: User): Promise<void> {
        try {
            const updateUser = await User.findByPk(user.id)
            if (!updateUser)
                return
            updateUser.displayName = user.displayName
            updateUser.avatarUrl = user.avatarUrl
            await updateUser.save()
        } catch (e) {
            throw new Error("Failed to update user!");
        }
    }

    async getAll(): Promise<User[]> {
        try {
            const users = await User.findAll()
            return users
        } catch (e) {
            throw new Error("Failed to update user!")
        }
    }

    async getUserById(id: number): Promise<User | null> {
        try {
            const user = await User.findByPk(id)
            if (!user) {
                return null
            } else {
                return user
            }
        } catch (e) {
            throw new Error("Failed to update user!")
        }
    }
    async getUserByEmail(email: string): Promise<User | null> {
        const user = await User.findOne({
            where:{email:email}
        })
        return user

    }
}
 
export default new UserRepository()