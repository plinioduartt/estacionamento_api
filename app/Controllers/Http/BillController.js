'use strict'
const Bill = use('App/Models/Bill');

class BillController {
    async index({ request, response }) {
        const bills = await Bill.query()
        .with('users')
        .with('tickets')
        .fetch();
        console.log(bills)
        response.status(200).json({ bills: bills });
    }

    async show({ params, request, response }) {
        const bill = await Bill.query().with('users').with('tickets').where('id', params.id).fetch();
        if (bill !== null && bill !== undefined) 
            return response.status(200).json({ bill: bill });
        else 
            return response.status(404).json({ message: 'Não encontrado' });
    }

    async store({ request, response }) {
        const data = request.body;
        data.status = "Pagamento pendente";
        try {
            const bill = await Bill.create(data);
            return response.status(201).json({ bill: bill });
        } catch (error) {
            return response.status(500).json({ message: 'Erro ao cadastrar bill', error_message: error.message });
        }
    }

    async update({ params, request, response }) {
        const bill = await Bill.findBy('id', params.id);
        if (bill == null || bill == undefined)
            return response.status(404).json({ message: 'Não encontrado' });
        
        const data = request.body;
        await bill.merge(data);

        if (!bill.save())
            return response.status(500).json({ message: 'Erro ao atualizar usuário', error_message: error.message });

        response.status(200).json({ bill: bill });
    }

    async delete({ params, request, response }) {

    }

    async my_bill({ params, request, response }) {
        const bill = await Bill.query().with('users').where('id', params.id).fetch();
        return response.status(200).json({ bill: bill })
    }
}

module.exports = BillController
