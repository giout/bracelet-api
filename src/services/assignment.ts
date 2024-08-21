import { db } from "../config/db"
import { assignment as assignmentQuery } from "../config/queries"

const create = async (user: string, bracelet: number, time: number) => {
    const assignment = await db.oneOrNone(assignmentQuery.create, { 
        user, 
        bracelet, 
        time 
    })
    return assignment
}

const delete_ = async (assignment: string) => {
    await db.oneOrNone(assignmentQuery.delete, { assignment })  
}

const assignmentService = {
    create,
    delete_
}

export default assignmentService