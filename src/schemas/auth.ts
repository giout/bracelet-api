import { z } from 'zod'
import { username, password } from './generics'

const signUp = z.object({
	username,
	password
})

const authSchema = {
	signUp
}
 
export default authSchema