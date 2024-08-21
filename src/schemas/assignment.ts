import { z } from "zod";

const create = z.object({
    user: z.string({
        required_error: "El usuario es requerido.",
        invalid_type_error: "El usuario debe ser una cadena de texto.",
    })
    .regex(
        /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/,
        "El usuario debe tener un formato UUID."
    ),
    bracelet: z.number({
        required_error: "El brazalete es requerido.",
        invalid_type_error: "El brazalete debe ser un número."
    })
    .int('El brazalete debe ser un número entero.'),
    time: z.number({
      required_error: "El tiempo asignado es requerido.",
      invalid_type_error: "El tiempo asignado debe ser un número."
    })
    .int('El tiempo asignado debe ser un número entero.')
})

const assignmentSchema = {
    create
}

export default assignmentSchema