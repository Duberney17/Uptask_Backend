import colors from 'colors'
import app from './server.js'
const PORT = process.env.PORT || 2000

app.listen(PORT, () => {
    console.log(colors.cyan.bold(`Servidor corriendo en el puerto: ${PORT}`))
})





