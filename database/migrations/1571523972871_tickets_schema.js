'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TicketsSchema extends Schema {
  up () {
    this.table('tickets', (table) => {
      table.integer('vacancy_id').unsigned();
    })
  }

  down () {
    this.table('tickets', (table) => {
      // reverse alternations
    })
  }
}

module.exports = TicketsSchema
