import express from "express";
import cors from "cors";
import employeeRoutes from "./routes/employee.routes.js"; // ✅ must include .js

const app = express();
app.use(cors());
app.use(express.json());

// API routes
app.use("/api/employees", employeeRoutes);

// test route
app.get("/", (_req, res) => {
  res.send("Backend is working!");
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
