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
const sinon = require('sinon')
const proxy = require('proxyquire')

describe('Promedio', function () {
  it('Sin desbordamiento', function () {
    const acumular = sinon.stub()
    acumular.withArgs(0, 1).returns({ acumulador: 1, error: 0 })
    acumular.withArgs(1, 2).returns({ acumulador: 3, error: 0 })
    acumular.withArgs(3, 3).returns({ acumulador: 6, error: 0 })
    const vector = [1, 2, 3]

    var promedio = proxy('../src/promedio.js', {
      '../src/suma.js': { acumular: acumular }
    })
    var resultado = promedio.promediar(vector)

    assert.equal(resultado.promedio, 2)
    assert.isFalse(resultado.error)
  })
})
