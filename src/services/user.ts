import { db } from "../config/db"
import { user as userQuery } from "../config/queries"
import { CustomError } from "../utils/error"

const getAll = async (page: number, limit: number) => {
    const users = await db.any(userQuery.getAll, { page, limit })
    return users
}

const create = async (username: number, id_card: number) => {
    const user = await db.oneOrNone(userQuery.create, { username, id_card })
    return user
}

const userService = {
    getAll,
    create
}

export default userService