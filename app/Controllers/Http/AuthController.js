'use strict'
const User = use('App/Models/User');

class AuthController {
    async auth({ auth, request, response }) {
        const { username, password } = request.all();
        const user = await User.findBy('username', username);
        if (user === null || user === undefined)
            return response.status(401).json({ error: 'Credenciais inválidas' });
       
        try {
            let token = await auth.attempt(username, password);  
            return response.status(200).json({ token: token, user: user });
        } catch (error) {
            return response.status(401).json({ error: 'Credenciais inválidas', error_message: error.message });     
        }
    }
}

module.exports = AuthController
