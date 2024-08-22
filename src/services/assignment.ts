import { db } from "../config/db"
import { assignment as assignmentQuery } from "../config/queries"

const create = async (id_card: number, bracelet: number, time: number) => {
    const assignment = await db.oneOrNone(assignmentQuery.create, { 
        id_card, 
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