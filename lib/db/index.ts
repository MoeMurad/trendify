import mongoose from 'mongoose'

declare global {
	let mongoose: any
}
const cached = global.mongoose || { conn: null, promise: null }

export const connectToDatabase = async (
	MONGODB_URI = process.env.MONGODB_URI
) => {
	if (cached.conn) return cached.conn
	if (!MONGODB_URI) throw new Error('MONGODB_URI is Missing')

	cached.promise = cached.promise || mongoose.connect(MONGODB_URI)
	cached.conn = await cached.promise

	return cached.conn
}
