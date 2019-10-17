'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BillsSchema extends Schema {
  up () {
    this.table('bills', (table) => {
      table.integer('ticket_id').notNullable().unsigned().alter()
      table.integer('user_id').notNullable().unsigned().alter()
    })
  }

  down () {
    this.table('bills', (table) => {
      // reverse alternations
    })
  }
}

module.exports = BillsSchema
