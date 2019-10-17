'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TicketsSchema extends Schema {
  up () {
    this.table('tickets', (table) => {
      table.string('end_at', 255).nullable()
      table.string('price', 255).nullable().defaultTo('10')
      table.string('status', 255).nullable()
    })
  }

  down () {
    this.table('tickets', (table) => {
      // reverse alternations
    })
  }
}

module.exports = TicketsSchema
