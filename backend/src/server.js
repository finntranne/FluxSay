import express from "express";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import cookieParser from "cookie-parser";
import path from "path";
import { ENV } from "./config/env.js";
import { fileURLToPath } from "url";
import { connectDB } from "./config/db.js";

const app = express();

const PORT = ENV.PORT || 3000;

app.use(express.json()); //req.body
app.use(cookieParser());

// Cấu hình __dirname chuẩn cho ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const frontendDistPath = path.resolve(__dirname, "../../frontend/dist");

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// Ready for deployment
if (ENV.NODE_ENV === "production") {
  app.use(express.static(frontendDistPath));

  app.get(/^(?!\/api).*/, (req, res) => {
    res.sendFile(path.join(frontendDistPath, "index.html"));
  });
}

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
  connectDB();
});
