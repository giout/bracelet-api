import { z } from "zod";
import { id_card } from "./generics";

const create = z.object({
    id_card,
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