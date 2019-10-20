'use strict'
const Ticket = use('App/Models/Ticket');
const Vacancy = use('App/Models/Vacancy');

class TicketController {

    async index({ request, response }) {
        const tickets = await Ticket.query().with('users').with('vacancy').where('status', 'Ativo').fetch();
        response.status(200).json({ tickets: tickets });
    }
    

    async show({ params, request, response }) {
        const ticket = await Ticket.query().with('users').with('vacancy').where('id', params.id).fetch();
        if (ticket !== null && ticket !== undefined) 
            return response.status(200).json({ ticket: ticket });
        else 
            return response.status(404).json({ message: 'Não encontrado' });
    }

    async store({ request, response }) {
        const data = request.body;

        var anysize = 3;//the size of string 
        var charset = "abcdefghijklmnopqrstuvwxyz0123456789"; //from where to create
        let result="";
        for( var i=0; i < anysize; i++ )
            result += charset[Math.floor(Math.random() * charset.length)];

        data.code = await result.toUpperCase();
        try {
            data.status = "Ativo";
            const ticket = await Ticket.create(data);
            const vacancy = await Vacancy.findBy('id', data.vacancy_id);
            await vacancy.merge({ status: 'Inativo' });
            await vacancy.save();
            
            return response.status(201).json({ ticket: ticket });
        } catch (error) {
            return response.status(500).json({ message: 'Erro ao cadastrar ticket', error_message: error.message });
        }
    }

    async update({ params, request, response }) {
        const ticket = await Ticket.findBy('id', params.id);
        if (ticket == null || ticket == undefined)
            return response.status(404).json({ message: 'Não encontrado' });
        
        const data = request.body;
        await ticket.merge(data);

        if (!ticket.save())
            return response.status(500).json({ message: 'Erro ao atualizar usuário', error_message: error.message });

        response.status(200).json({ ticket: ticket });
    }

    async close({ params, request, response }) {
        const ticket = await Ticket.findBy('id', params.id);
        if (ticket == null || ticket == undefined)
            return response.status(404).json({ message: 'Não encontrado' });
        
        const data = request.body;
        data.end_at = new Date();
        await ticket.merge(data);

        if (!ticket.save())
            return response.status(500).json({ message: 'Erro ao atualizar usuário', error_message: error.message });

        response.status(200).json({ ticket: ticket });
    }


    async delete({ params, request, response }) {

    }

    async my_tickets({ params, request, response }) {
        const tickets = await Ticket.query().with('users').with('vacancy').where('user_id', params.id).orderBy('tickets.created_at','desc').fetch();
        return response.status(200).json({ tickets: tickets })
    }

    async show_ticket({ params, request, response }) {
        const ticket = await Ticket.query().with('users').with('vacancy').where('code', params.code).fetch();
        return response.status(200).json({ ticket: ticket })
    }

    async has_active_ticket({ params, request, response }) {
        const tickets = await Ticket.query().with('users').with('vacancy').where('user_id', params.id).where('status', 'Ativo').first();
        return response.status(200).json({ tickets: tickets })
    }

    async vacancies({ params, request, response }) {
        const vacancies = await Vacancy.all();
        return response.status(200).json({ vacancies: vacancies });
    }

    async update_vacancies({ params, request, response }) {
        const vacancies = await Vacancy.findBy('id', params.id);
        if (vacancies === null && vacancies === undefined) 
            return response.status(404).json({ error: "Nenuma vaga encontrada com esse ID." });

        await vacancies.merge({ status: 'Ativo' });
        await vacancies.save();

        return response.status(200).json({ vacancies: vacancies });
    }
}

module.exports = TicketController
