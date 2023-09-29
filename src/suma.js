/**
 * Copyright (c) 2023, Laboratorio de Microprocesadores
 * Facultad de Ciencias Exactas y Tecnología, Universidad Nacional de Tucumán
 * https://www.microprocesadores.unt.edu.ar/
 *
 * Copyright (c) 2023, Esteban Volentini <evolentini@herrera.unt.edu.ar>
 *
 * SPDX-License-Identifier: MIT
 */

exports.acumular = (acumulador, operando) => {
  const positivo = 0x7fff
  const negativo = -1 * (positivo + 1)

  let suma = acumulador + operando

  if (suma > positivo) {
    return { acumulador: positivo, error: 1 }
  } else if (suma < negativo) {
    return { acumulador: negativo, error: -1 }
  } else {
    return { acumulador: suma, error: 0 }
  }
}
