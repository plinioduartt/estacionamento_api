'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BillSchema extends Schema {
  up () {
    this.create('bills', (table) => {
      table.increments()
      table.integer('ticket_id').notNullable()
      table.integer('user_id').notNullable()
      table.string('status').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('bills')
  }
}

module.exports = BillSchema
