'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TicketSchema extends Schema {
  up () {
    this.create('tickets', (table) => {
      table.increments()
      table.string('end_at', 255).notNullable()
      table.string('price', 255).notNullable()
      table.string('status', 255).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('tickets')
  }
}

module.exports = TicketSchema
