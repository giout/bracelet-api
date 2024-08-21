import { db } from "../config/db"
import { assignmentHistory } from "../config/queries"

const getByBracelet = async (bracelet: number) => {
    const assignments = await db.any(assignmentHistory.getByBracelet, {
        bracelet 
    })
    return assignments
}

const assignmentHistoryService = {
    getByBracelet
}

export default assignmentHistoryService