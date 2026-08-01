import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import path from "path";
import { fileURLToPath } from "url";
import { connectDB } from "./config/db.js";

// Đọc các biến từ file .env vào process.env
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json()); //req.body

// Cấu hình __dirname chuẩn cho ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// Ready for deployment
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get(/^\/(.*)/, (req, res) => {
    res.sendFile(path.join(__dirname, "../../frontend/dist/index.html"));
  });
}

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
  connectDB();
});
