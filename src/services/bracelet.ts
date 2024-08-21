import { db } from "../config/db"
import { bracelet } from "../config/queries"

const getAll = async (page: number, limit: number) => {
    const bracelets = await db.any(bracelet.getAll, { page, limit })
    return bracelets
}

const braceletService = {
    getAll
}

export default braceletService