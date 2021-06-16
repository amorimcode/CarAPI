const User = require('../Models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('../../config/auth')

class LoginController {

    async index(req, res) {
        const { email, password } = req.body

        const userExist = await User.findOne({ email })
        if (!UserExist) {
            return res.status(400).json({
                error: true,
                message: 'Usuário não existe!'
            })
        }

        if (!(await bscrypt.compare(userExist.password, userExist))) {
            return res.status(400).json({
                error: true,
                message: 'Senha inválida.'
            })
        }

        return res.status(200).json({
            user: {
                name: userExist.name,
                email: userExist.email
            },
            token: jwt.sign(
                { id: userExist._id },
                config.secret,
                {expireIn: config.expireIn}
            )
        })
    }
}

module.exports = new LoginController();