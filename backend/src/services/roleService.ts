import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function getRoles() {
  const roles = await prisma.role.findMany()
  return roles
}

export async function addRole(name: string) {
  const newRole = await prisma.role.create({
    data: {
      name: name
    }
  })
  return newRole
}
export function deleteRole(id: number) {
    throw new Error("Function not implemented.")
}

