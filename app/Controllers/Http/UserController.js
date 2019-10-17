'use strict'
const User = require('../../Models/User');

class UserController {

    async index({ request, response }) {
        const users = await User.query().fetch();
        response.status(200).json({ users: users });
    }

    async show({ params, request, response }) {
        const user = await User.findBy('id', params.id);
        if (user !== null && user !== undefined) 
            return response.status(200).json({ user: user });
        else 
            return response.status(404).json({ message: 'Não encontrado' });
    }

    async store({ request, response }) {
        const data = request.body;
        const user_exists = await User.findBy('username', data.username);
        
        if (user_exists)
            return response.status(401).json({ message: 'Username já existe, tente outro' });

        try {
            const user = await User.create(data);
            return response.status(201).json({ user: user });
        } catch (error) {
            return response.status(500).json({ message: 'Erro ao cadastrar usuário', error_message: error.message });
        }
    }

    async update({ params, request, response }) {
        const user = await User.findBy('id', params.id);
        if (user == null || user == undefined)
            return response.status(404).json({ message: 'Não encontrado' });
        
        const data = request.body;
        await user.merge(data);

        if (!user.save())
            return response.status(500).json({ message: 'Erro ao atualizar usuário', error_message: error.message });

        response.status(200).json({ user: user });
    }

    async delete({ params, request, response }) {

    }

}

module.exports = UserController
