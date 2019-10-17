'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TicketsSchema extends Schema {
  up () {
    this.table('tickets', (table) => {
      table.dropColumn('end_at');
      table.dropColumn('price');
      table.dropColumn('status');
    })
  }

  down () {
    this.table('tickets', (table) => {
      // reverse alternations
    })
  }
}

module.exports = TicketsSchema
