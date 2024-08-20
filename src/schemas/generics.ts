import { z } from 'zod'

export const username = z
  .string({
    required_error: "El nombre de usuario es requerido.",
    invalid_type_error: "El nombre de usuario debe ser una cadena de texto.",
  })
  .min(4, "El nombre de usuario debe tener al menos 4 caracteres.")
  .max(50, "El nombre de usuario no debe tener más de 50 caracteres");

export const password = z
  .string({
    required_error: "La contraseña es requerida.",
    invalid_type_error: "La contraseña debe ser una cadena de texto.",
  })
  .min(8, "La contraseña debe tener al menos 8 caracteres.")
  .max(50, "La contraseña no debe tener más de 50 caracteres.")
  .regex(
    /^(?=.*[A-Z])(?=.*\d).+/,
    "La contraseña debe contener al menos una letra mayúscula y un número."
);

export const id_card = z 
  .number({
    required_error: "El número de identificación es requerido.",
    invalid_type_error: "El número de identificación debe ser un número."
  })
  .int('El número de identificación debe ser un número entero.')