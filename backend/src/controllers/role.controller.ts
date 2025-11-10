import type { Request, Response } from "express"
import * as service from "../services/roleService.js"

export async function getRoles(req: Request, res: Response) {
  const roles = await service.getRoles()
  res.json(roles)
}

export async function addRole(req: Request, res: Response) {
  const body = req.body
  const role = await service.addRole(body.name)
  res.json(role)
}

export async function deleteRole(req: Request, res: Response) {
  const id = Number(req.params.id)
  const role = await service.deleteRole(id)
  res.json(role)
}
