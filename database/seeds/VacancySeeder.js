'use strict'

const Vacancy = use('App/Models/Vacancy');

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class VacancySeeder {
 
  async run () {
    // for (var x = 0; x < 6; x++) {
    //   var anysize = 2;//the size of string 
    //   var charset = "abcdefghijklmnopqrstuvwxyz0123456789"; //from where to create
    //   let result="";
    //   for( var i=0; i < anysize; i++ )
    //       result += charset[Math.floor(Math.random() * charset.length)];

    //   var code = await result.toUpperCase();
    //   const vacancy = await Vacancy.create({
    //     code: code,
    //     status: 'Ativo'
    //   });
    //   vacancy.save();
    // }

    await Vacancy.query().delete();

    await Vacancy.create({
      code: 'A1',
      status: 'Ativo'
    });
    await Vacancy.create({
      code: 'A2',
      status: 'Ativo'
    });
    await Vacancy.create({
      code: 'A3',
      status: 'Ativo'
    });
    await Vacancy.create({
      code: 'A4',
      status: 'Ativo'
    });
    await Vacancy.create({
      code: 'B1',
      status: 'Ativo'
    });
    await Vacancy.create({
      code: 'B2',
      status: 'Ativo'
    });
    await Vacancy.create({
      code: 'B3',
      status: 'Ativo'
    });
    await Vacancy.create({
      code: 'B4',
      status: 'Ativo'
    });   

  }
}

module.exports = VacancySeeder
