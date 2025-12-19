import connectDB from '@/config/database'
import Property from '@/models/Property'

export async function getRecentProperties(limit = 3) {
  try {
    await connectDB()

    const properties = await Property
      .find({})
      .sort({ createdAt: -1 }) // latest first
      .limit(limit)
      .lean()

    return properties
  } catch (error) {
    console.error('Failed to fetch recent properties:', error)
    return []
  }
}
