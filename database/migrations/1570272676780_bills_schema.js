'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BillsSchema extends Schema {
  up () {
    this.table('bills', (table) => {
      table.string('method').notNullable()
    })
  }

  down () {
    this.table('bills', (table) => {
      // reverse alternations
    })
  }
}

module.exports = BillsSchema
