import { PrismaClient } from "@prisma/client"

const singletonSync = <T>(id: string, fn: () => T) => {
  if (process.env.NODE_ENV === "production") {
    return fn()
  }
  if (!global[id]) {
    global[id] = fn()
  }
  return global[id] as T
}

export const prisma = singletonSync("prisma", () => {
  return new PrismaClient()
})
