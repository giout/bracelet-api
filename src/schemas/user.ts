import { z } from 'zod'
import { username, id_card } from './generics'

const createUser = z.object({
	username,
	id_card
})

const userSchema = {
	createUser
}
 
export default userSchema