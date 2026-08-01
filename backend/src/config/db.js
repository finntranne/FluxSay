import mongoose from "mongoose";
import dns from "dns";

try {
  dns.setServers(["8.8.8.8", "8.8.4.4"]);
  console.log("Đã cấu hình Google DNS (8.8.8.8)");
} catch (e) {
  console.warn("Cảnh báo: Không thể cấu hình DNS Resolver tự động:", e.message);
}

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("MONGODB CONNECTED: ", conn.connection.host);
  } catch (error) {
    console.error("Error connection to MONGODB: ", error);
    process.exit(1); // 1 fail, 0 success
  }
};

export { connectDB };
