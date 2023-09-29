/**
 * Copyright (c) 2023, Laboratorio de Microprocesadores
 * Facultad de Ciencias Exactas y Tecnología, Universidad Nacional de Tucumán
 * https://www.microprocesadores.unt.edu.ar/
 *
 * Copyright (c) 2023, Esteban Volentini <evolentini@herrera.unt.edu.ar>
 *
 * SPDX-License-Identifier: MIT
 */

const suma = require('./suma.js')

exports.promediar = (valores) => {
  var acumulador = 0
  for (var indice = 0; indice < valores.length; indice++) {
    var resultado = suma.acumular(acumulador, valores[indice])
    if (resultado.error != 0) {
      return { promedio: 0, error: true }
    }
    acumulador = resultado.acumulador
  }

  let promedio = acumulador / valores.length
  return { promedio: promedio, error: false }
}
