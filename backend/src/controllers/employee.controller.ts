import type { Request, Response } from "express"
import * as service from "../services/employee.service.js"

export async function getEmployees(res: Response) {
  const employees = await service.getEmployees()
  res.json(employees)
}

export async function addEmployee(req: Request, res: Response) {
  const body = req.body
  const employee = await service.addEmployee(body.firstName, body.lastName, body.roleId)
  res.json(employee)
}

export async function deleteEmployee(req: Request, res: Response) {
  const id = Number(req.params.id)
  const result = await service.deleteEmployee(id)
  res.json(result)
}