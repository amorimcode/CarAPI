const Car = require('../Models/Car');
const yup = require('yup')

class CarController {
    async add(req, res) {
        const { name, brand, model, year, fuel, color, price } = req.body;
        const carExist = await Car.findOne({ name });

        if (carExist) {
            return res.status(412).json({
                error: true,
                message: 'Carro já cadastrado.'
            })
        }

        let carSchema = yup.object().shape({
            name: yup.string().required().min(3, 'Mínimo de 3 caracteres.'),
            brand: yup.string().required().min(3, 'Mínimo de 3 caracteres.'),
            model: yup.string().required().min(3, 'Mínimo de 3 caracteres.'),
            year: yup.string().required().min(4, 'O ano deve ter 4 caracteres.').max(4, 'O ano deve ter 4 caracteres.'),
            fuel: yup.string().required().min(3, 'Mínimo de 3 caracteres.'),
            color: yup.string().required().min(3, 'Mínimo de 3 caracteres.'),
            price: yup.number().required()

        });

        if (!(await carSchema.isValid(req.body))) {
            return res.status(400).json({
                error: true,
                message: "Dados inválidos!"
            })
        }

        const data = { name, brand, model, year, fuel, color, price }

        try {
            const car = await Car.create(data)
            return res.send({ car })
        } catch (err) {
            return res.send({ message: err.message })
        }
    }

    async findAll(req, res) {
        const car = await Car.find();
        return res.send({ car })
    }

    // falta mandar mensagem de erro quando não encontrado 
    async delete(req, res) {
        const { id } = req.params;
        try {
            const carDelete = await Car.findByIdAndDelete(id)
            return res.status(204).send({ message: 'oi'})
        } catch (err) {
            return res.status(400).json({
                error: true,
                message: "Carro não encontrado ou inválido"
            })
        }
    }
}

module.exports = new CarController();