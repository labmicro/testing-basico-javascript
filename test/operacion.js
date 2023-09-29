/**
 * Copyright (c) 2023, Laboratorio de Microprocesadores
 * Facultad de Ciencias Exactas y Tecnología, Universidad Nacional de Tucumán
 * https://www.microprocesadores.unt.edu.ar/
 *
 * Copyright (c) 2023, Esteban Volentini <evolentini@herrera.unt.edu.ar>
 *
 * SPDX-License-Identifier: MIT
 */

const describe = require('mocha').describe
const it = require('mocha').it
const assert = require('chai').assert

const promedio = require('../src/promedio.js')

describe('Promedio', function () {
  it('Sin desbordamiento', function () {
    const vector = [1, 2, 3]

    var resultado = promedio.promediar(vector)

    assert.equal(resultado.promedio, 2)
    assert.isFalse(resultado.error)
  })

  it('Con desbordamiento', function () {
    const vector = [32765, 3]

    var resultado = promedio.promediar(vector)

    assert.equal(resultado.promedio, 0)
    assert.isTrue(resultado.error)
  })
})
