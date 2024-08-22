import { db } from "../config/db"
import { bracelet as braceletQuery } from "../config/queries"

const getAll = async () => {
    const bracelets = await db.any(braceletQuery.getAll, {})
    return bracelets
}

const create = async () => {
    const bracelet = await db.oneOrNone(braceletQuery.create, {})
    return bracelet
}

const delete_ = async (bracelet: number) => {
    await db.oneOrNone(braceletQuery.delete, { bracelet })
}

const braceletService = {
    getAll,
    create,
    delete_
}

export default braceletService