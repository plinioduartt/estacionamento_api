'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Ticket extends Model {

    users() {
        return this.belongsTo('App/Models/User');
    }
    

    bills() {
        return this.belongsTo('App/Models/Bill');
    }

    vacancy() {
        return this.belongsTo('App/Models/Vacancy');
    }

}

module.exports = Ticket
