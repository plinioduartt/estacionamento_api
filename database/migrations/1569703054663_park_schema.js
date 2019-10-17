'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ParkSchema extends Schema {
  up () {
    this.create('parks', (table) => {
      table.increments()
      table.string('name', 255).notNullable()
      table.string('status', 255).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('parks')
  }
}

module.exports = ParkSchema
