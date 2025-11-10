import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function getEmployees() {
  const employees = await prisma.employee.findMany()
  return employees
}

export async function addEmployee(firstName: string, lastName: string, roleId: number) {
  const newEmployee = await prisma.employee.create({
    data: {
      firstName: firstName,
      lastName: lastName,
      roleId: roleId
    }
  })
  return newEmployee
}
export function createEmployee(body: any) {
    throw new Error("Function not implemented.")
}

export function deleteEmployee(body: any) {
    throw new Error("Function not implemented.")
}

export function getAllRoles() {
    throw new Error("Function not implemented.")
}

export function createRole(body: any) {
    throw new Error("Function not implemented.")
}

export function deleteRole(body: any) {
    throw new Error("Function not implemented.")
}

