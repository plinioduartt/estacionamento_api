'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VacanciesSchema extends Schema {
  up () {
    this.create('vacancies', (table) => {
      table.increments()
      table.integer('ticket_id').unsigned()
      table.string('code')
      table.timestamps()
    })
  }

  down () {
    this.drop('vacancies')
  }
}

module.exports = VacanciesSchema
