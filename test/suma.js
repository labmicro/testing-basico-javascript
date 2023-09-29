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
const expect = require('chai').expect

const suma = require('../src/suma.js')

describe('Suma con saturacion', function () {
  it('Sin desbordamiento', function () {
    let acumulador = 5
    let resultado = suma.acumular(acumulador, 3)
    expect(resultado.acumulador).to.equal(8)
    expect(resultado.error).to.equal(0)
  })
})
