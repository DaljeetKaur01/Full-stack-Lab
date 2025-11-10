import express from "express"
import {getEmployees,addEmployee,deleteEmployee,} from "../controllers/employee.controller.js"
import {getRoles,addRole,deleteRole} from "../controllers/role.controller.js"

const router = express.Router()

// employee routes
router.get("/employees", getEmployees)
router.post("/employees", addEmployee)
router.delete("/employees/:id", deleteEmployee)

// role routes
router.get("/roles", getRoles)
router.post("/roles", addRole)
router.delete("/roles/:id", deleteRole)

export default router
