import pg from "pg-promise"
import path from 'path'

const { QueryFile } = pg

export const getQuery = (filePath: string) => {
    const queryPath = path.join(__dirname, '/../../db/queries/', filePath)

    return new QueryFile(queryPath, {
        minify: true,
        params: {
            schema: 'public'
        }
    })
}