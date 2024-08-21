import { db } from "../config/db"
import { assignmentHistory } from "../config/queries"

const getByBracelet = async (bracelet: number, page: number, limit: number) => {
    const assignments = await db.any(assignmentHistory.getByBracelet, {
        bracelet ,
        page,
        limit
    })
    return assignments
}

const assignmentHistoryService = {
    getByBracelet
}

export default assignmentHistoryService