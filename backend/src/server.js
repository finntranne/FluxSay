import express from "express";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import path from "path";
import { ENV } from "./config/env.js";
import { fileURLToPath } from "url";
import { connectDB } from "./config/db.js";

const app = express();

const PORT = ENV.PORT || 3000;

app.use(express.json()); //req.body

// Cấu hình __dirname chuẩn cho ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// Ready for deployment
if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get(/^\/(.*)/, (req, res) => {
    res.sendFile(path.join(__dirname, "../../frontend/dist/index.html"));
  });
}

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
  connectDB();
});
