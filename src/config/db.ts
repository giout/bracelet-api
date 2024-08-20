import 'dotenv/config'
import bluebird from 'bluebird'
import pg from 'pg-promise'

const pgp = pg({ promiseLib: bluebird })

export const db = pgp(<string> process.env.DB_URI)

