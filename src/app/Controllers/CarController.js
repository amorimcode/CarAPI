const Car = require('../Models/Car');
const yup = require('yup')

class CarController {
    async add(req, res) {
        const { name, brand, model, year, fuel, color, price } = req.body;

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

    async delete(req, res) {
        const { id } = req.params;
        try {
            const car = await Car.findById(id)
            if (!car) {
                return res.status(422).json({
                    error: true,
                    message: 'Carro não encontrado ou inválido'
                })
            }
            await car.delete()
            return res.status(204).send()
        } catch (err) {
            return res.status(422).json({
                error: true,
                message: "Carro não encontrado ou inválido"
            })
        }
    }

    async findAll(req, res) {
        const car = await Car.find();
        return res.send({ car })
    }

    async findById(req, res) {
        const { id } = req.params;
        try {
            const car = await Car.findById(id)
            if (!car) {
                return res.status(400).json({
                    error: true,
                    message: 'Carro não encontrado'
                })
            }
            return res.status(200).send({ car })
        } catch (err) {
            return res.status(400).json({
                error: true,
                message: "Carro não encontrado"
            })
        }
    }

    async update(req, res) {
        const { id } = req.params;
        const { name, brand, model, year, fuel, color, price } = req.body;

        const idExist = await Car.findById(id)

        if (!idExist) {
            return res.status(412).json({
                error: true,
                message: "Carro não encontrado"
            })
        }

        let carSchema = yup.object().shape({
            name: yup.string().min(3, 'Mínimo de 3 caracteres.'),
            brand: yup.string().min(3, 'Mínimo de 3 caracteres.'),
            model: yup.string().min(3, 'Mínimo de 3 caracteres.'),
            year: yup.string().min(4, 'O ano deve ter 4 caracteres.').max(4, 'O ano deve ter 4 caracteres.'),
            fuel: yup.string().min(3, 'Mínimo de 3 caracteres.'),
            color: yup.string().min(3, 'Mínimo de 3 caracteres.'),
            price: yup.number()
        });

        if (!(await carSchema.isValid(req.body))) {
            return res.status(400).json({
                error: true,
                message: "Dados inválidos!"
            })
        }

        const updates = req.body
        const options = { new: true }
        try {
            const car = await Car.findByIdAndUpdate(id, updates, options)
            return res.status(200).send({ car })
        } catch (err) {
            return res.status(400).send({ message: err.message })
        }
    }
}

module.exports = new CarController();