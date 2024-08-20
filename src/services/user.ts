import { db } from "../config/db"
import { user } from "../config/queries"
import { CustomError } from "../utils/error"

const getAll = async (page: number, limit: number) => {
    const users = await db.any(user.getAll, { page, limit })
    return users
}

const userService = {
    getAll
}

export default userService