import { db } from "../config/db"
import { user as userQuery } from "../config/queries"
import { CustomError } from "../utils/error"

const getAll = async () => {
    const users = await db.any(userQuery.getAll, {})
    return users
}

const create = async (username: string, id_card: number) => {
    const user = await db.oneOrNone(userQuery.create, { username, id_card })
    return user
}

const update = async (user: string, username: string, id_card: number) => {
    await db.oneOrNone(userQuery.update, { user, username, id_card })
}

const delete_ = async (user: string) => {
    await db.oneOrNone(userQuery.delete, { user })
}

const userService = {
    getAll,
    create,
    update,
    delete_
}

export default userService