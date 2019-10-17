'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TicketsSchema extends Schema {
  up () {
    this.table('tickets', (table) => {
      // alter table
      table.string('code').notNullable().unique()
    })
  }

  down () {
    this.table('tickets', (table) => {
      // reverse alternations
    })
  }
}

module.exports = TicketsSchema
  