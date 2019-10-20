'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VacanciesSchema extends Schema {
  up () {
    this.table('vacancies', (table) => {
      table.dropColumn('ticket_id');
    })
  }

  down () {
    this.table('vacancies', (table) => {
      // reverse alternations
    })
  }
}

module.exports = VacanciesSchema
