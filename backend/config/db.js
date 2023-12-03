import mongoose from 'mongoose'

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI)
    console.log('Database connected: ', conn.connection.host)
  } catch (e) {
    console.log('Failed to connect to the databse: ', e)
  }
}
