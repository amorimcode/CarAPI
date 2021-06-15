class UserController {
    index(req, res) {
        console.log(req.body)
    }
}

module.exports = new UserController();
