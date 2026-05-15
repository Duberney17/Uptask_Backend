import mongoose from 'mongoose'
import colors from 'colors'

export const connectDB = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGO_URI as string)
        const url = `${connection.host}:${connection.port}`
        console.log(colors.magenta.bold(`MongoDB conectado en: ${url}`))
    } catch (error) {
        console.log(colors.red.bold('Error al conectar a MongoDB'))
        console.log(error)
        process.exit(1)
    }
}
