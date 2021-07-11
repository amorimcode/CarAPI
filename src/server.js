const app = require('./app')

var PORT = process.env.PORT || 9090;
app.listen(PORT, () => {
    console.log(`App listen on port: ${PORT}`);
})