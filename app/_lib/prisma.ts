import { PrismaClient } from "@prisma/client"
import { PrismaPg } from "@prisma/adapter-pg"
import { Pool } from "pg"

declare global {
  // eslint-disable-next-line no-unused-vars
  var cachedPrisma: PrismaClient | undefined
  // eslint-disable-next-line no-unused-vars
  var cachedPool: Pool | undefined
}

const createPrismaClient = () => {
  const connectionString = process.env.DATABASE_URL

  if (!connectionString) {
    throw new Error("DATABASE_URL is not defined")
  }

  const pool =
    process.env.NODE_ENV === "production"
      ? new Pool({ connectionString })
      : (global.cachedPool ??= new Pool({ connectionString }))

  const adapter = new PrismaPg(pool)

  return new PrismaClient({ adapter })
}

let prisma: PrismaClient
if (process.env.NODE_ENV === "production") {
  prisma = createPrismaClient()
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = createPrismaClient()
  }
  prisma = global.cachedPrisma
}

export const db = prisma
