'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Bill extends Model {

    users() {
        return this.belongsTo('App/Models/User');

    }

    tickets() {
        return this.belongsTo('App/Models/Ticket');
    }
}

module.exports = Bill
