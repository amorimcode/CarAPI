
const User = require('../Models/User');

class UserController {

    show(req, res) {
        var users = ["Bruno", "Kamila", "Lillian"]
        return res.status(200).json({
            error: false,
            users
        })
    }

    async store(req, res) {

        // Validação

        const { name, email, password } = req.body;

        const data = { name, email, password }

        await User.create(data, (err) => {
            if (err) return res.status(400).json({
                error: true,
                message: "Erro ao tentar inserir usuário no MongoDB"
            })

            return res.status(200).json({
                error: false,
                message: "Usuário Cadastrado com sucesso"
            })
        })
    }

}

module.exports = new UserController();
