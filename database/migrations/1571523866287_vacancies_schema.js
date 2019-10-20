'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VacanciesSchema extends Schema {
  up () {
    this.table('vacancies', (table) => {
      table.string('status');
    })
  }

  down () {
    this.table('vacancies', (table) => {
      // reverse alternations
    })
  }
}

module.exports = VacanciesSchema
