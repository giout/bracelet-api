import { NextFunction, Request, Response } from 'express';
import { ZodSchema } from 'zod';
import { CustomError } from '../utils/error';

const validate = (property: string, schema: ZodSchema) => {
	return async (req: Request, res: Response, next: NextFunction) => {
		let evaluate
		if (property==='body') {
			evaluate = req.body
		}
		else if (property === 'id') {
			evaluate = req.params.id
		}
		else {
			return next()
		}
		const result: any = schema.safeParse(evaluate)
		if (result.error) {
			let errorMessage = ''
			for (const issue of result.error.issues){
				errorMessage += `${issue.message} `
			}
			return next(new CustomError(errorMessage, 400))
		}

		next()
	}
}

export default validate